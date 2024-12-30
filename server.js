const express = require('express');
const next = require('next');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Tambahkan fs untuk menghapus file
const { v4: uuidv4 } = require('uuid');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

// Setup Express
app.prepare().then(() => {
  const server = express();

  // Menyajikan file statis dari folder 'uploads'
  server.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

  // Setup storage untuk multer (menyimpan file di folder 'uploads')
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'public/uploads')); // Simpan ke folder public/uploads
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage });

  server.use(express.json());

  // Data projects
  let projects = [];

  // API untuk mendapatkan semua projects
  server.get('/api/projects', (req, res) => {
    res.json(projects);
  });

  // API untuk menambahkan project baru
  server.post('/api/projects', upload.single('image'), (req, res) => {
    const { title, description, link, tags } = req.body;
    const image = req.file ? '/uploads/' + path.basename(req.file.path) : null;

    if (!title || !description || !tags || !image) {
      return res
        .status(400)
        .json({ error: 'Title, description, image, and tags are required' });
    }

    const newProject = {
      id: uuidv4(),
      title,
      description,
      imageUrl: image, // Simpan path relatif ke image
      link,
      tags: tags.split(','),
    };

    projects.push(newProject);

    res.status(201).json({
      message: 'Project added successfully',
      project: newProject,
    });
  });

  // API untuk menghapus project berdasarkan id
  server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex((project) => project.id === id);

    if (projectIndex === -1) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const projectToDelete = projects[projectIndex];

    // Hapus gambar jika ada
    if (projectToDelete.imageUrl) {
      const imagePath = path.join(__dirname, 'public', projectToDelete.imageUrl);
      
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Failed to delete image:', err);
          return res.status(500).json({ error: 'Failed to delete associated image' });
        }
      });
    }

    // Hapus project dari array
    projects.splice(projectIndex, 1);

    res.status(200).json({
      message: `Project with id ${id} has been deleted successfully.`,
    });
  });

  // Semua permintaan selain API akan diteruskan ke Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Jalankan server di port yang sama
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
