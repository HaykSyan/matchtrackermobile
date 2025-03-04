import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <TouchableOpacity
      className={`bg-primary-red flex cursor-pointer flex-row items-center gap-2.5 rounded px-10 py-4 text-white ${className}`}
      onPress={onClick}>
      <Text className="text-white">{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
