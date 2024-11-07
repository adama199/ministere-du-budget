import { FiAlertCircle } from "react-icons/fi";
type PropsType = {
  message: string;
};
export function AlertInfo({ message }: PropsType) {
  return (
    <div className="px-3 w-100">
      <div className="edk-alert edk-alert-info" role="alert">
        <FiAlertCircle style={{ fontSize: 24 }} />
        <h4>{message}</h4>
      </div>
    </div>
  );
}
