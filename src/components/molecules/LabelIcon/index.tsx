import { IconButtonProps } from "@/components/atoms/IconButton";
import Flex from "@/components/layout/Flex";

export interface LabelIconProps {
  icon: React.ComponentType<IconButtonProps>;
  label: string;
}

const LabelIcon = ({ icon, label }: LabelIconProps) => {
  return (
    <>
      <Flex></Flex>
    </>
  );
};
