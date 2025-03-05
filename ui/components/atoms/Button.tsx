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
      className={`flex cursor-pointer flex-row items-center gap-2.5 rounded bg-primary-red px-10 py-4 text-white ${className}`}
      onPress={onClick}>
      <Text className="flex w-full flex-row items-center justify-center text-center text-white md:w-auto">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
