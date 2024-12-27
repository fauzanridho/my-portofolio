import { toast as hotToast } from "react-hot-toast";

export const useToast = () => {
  const toast = ({ title, description }: { title: string; description: string }) => {
    hotToast.success(
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    );
  };

  return { toast };
};
