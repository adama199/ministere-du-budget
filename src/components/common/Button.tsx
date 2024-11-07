import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export enum ButtonState {
  Primary = "Primary",
  Loading = "Loading",
}

type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement>;

type BtnPropsType = {
  label: string;
  type?: "submit" | "button" | "reset";
  onClick?: (e?: any) => void;
  isLoading?: boolean;
  customClass?: string;
  customBtn?: boolean;
};
type BtnPropsTypeGoBack = {
  navigation: any;
};

type BtnLoadingType = {
  isLoading: boolean;
};
export function BtnNext({ label, type, isLoading }: BtnPropsType) {
  return (
    <button className="m-btn m-btn-next" type={type || "button"}>
      {!isLoading ? (
        `${label}`
      ) : (
        <>
          <span
            className="spinner-border spinner-border-sm text-light me-1 d-inline-block"
            role="status"
          ></span>
          <span>Chargement...</span>
        </>
      )}
    </button>
  );
}
export function BtnBack({
  label,
  navigation,
}: BtnPropsType & BtnPropsTypeGoBack) {
  return (
    <button
      type="button"
      className="btn auth-submit-annuler"
      onClick={() => navigation.previous()}
    >
      {label}
    </button>
  );
}
export function BtnSkip({ label }: BtnPropsType) {
  return <button className="m-btn m-btn-back">{label}</button>;
}

export function GoBackButton({ label = "Annuler" }: { label?: string }) {
  const navigate = useNavigate();
  return (
    <button className="auth-submit-annuler" onClick={() => navigate(-1)}>
      {label}
    </button>
  );
}

export function BtnAnnulerModal({ label, onClick, customClass }: BtnPropsType) {
  return (
    <button
      className={`btn custom-btn-annuler-modale ${customClass && customClass}`}
      data-bs-dismiss="modal"
      type="button"
      onClick={onClick}
    >
      {label ? label : <IoClose />}
    </button>
  );
}

export function BtnCloseModal({ label, onClick }: BtnPropsType) {
  return (
    <button
      className="close-modal auth-submit-annuler"
      data-bs-dismiss="modal"
      type="button"
      onClick={onClick}
    >
      {label ? label : <IoClose />}
    </button>
  );
}

export function BtnSubmit({
  isLoading,
  label,
  customClass,
  ...rest
}: BtnPropsType &
  BtnLoadingType &
  React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return !isLoading ? (
    <button
      type="submit"
      className={`btn auth-submit-btn ${customClass && customClass}`}
      {...rest}
      disabled={isLoading}
    >
      {label}
    </button>
  ) : (
    <button type="submit" className="btn auth-submit-btn" {...rest}>
      <span
        className="spinner-border spinner-border-sm custom-spinner text-primary me-1 d-inline-block"
        role="status"
      ></span>
      <span>Chargement...</span>
    </button>
  );
}
export function BtnUnsubscribe({
  isLoading,
  label,
  ...rest
}: BtnPropsType &
  BtnLoadingType &
  React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return !isLoading ? (
    <button type="submit" className="btn unsubscribe-submit-btn" {...rest}>
      {label}
    </button>
  ) : (
    <button
      type="submit"
      className="btn unsubscribe-submit-btn"
      {...rest}
      disabled={isLoading}
    >
      <span
        className="spinner-border spinner-border-sm custom-spinner text-primary me-1 d-inline-block"
        role="status"
      ></span>
      <span>Chargement...</span>
    </button>
  );
}

// export function ButtonEdit() {
//   return (
//     <button
//       className="btn btn-action-modal-icon with-tooltip"
//       data-tooltip-content="Modifier"
//     >
//       <MdEdit />
//     </button>
//   );
// }

export const ButtonEdit: React.FC<ButtonProps> = ({ ...rest }) => {
	return (
		<button
			className="btn btn-action-modal-icon with-tooltip"
			data-tooltip-content="Modifier"
			type="button"
			{...rest}
		>
			<MdEdit />
		</button>
	);
};

export const ActivityIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1798 4.41C17.1798 3.08 18.2598 2 19.5898 2C20.9198 2 21.9998 3.08 21.9998 4.41C21.9998 5.74 20.9198 6.82 19.5898 6.82C18.2598 6.82 17.1798 5.74 17.1798 4.41ZM13.3297 14.7593L16.2197 11.0303L16.1797 11.0503C16.3397 10.8303 16.3697 10.5503 16.2597 10.3003C16.1507 10.0503 15.9097 9.8803 15.6507 9.8603C15.3797 9.8303 15.1107 9.9503 14.9497 10.1703L12.5307 13.3003L9.7597 11.1203C9.5897 10.9903 9.3897 10.9393 9.1897 10.9603C8.9907 10.9903 8.8107 11.0993 8.6897 11.2593L5.7307 15.1103L5.6697 15.2003C5.4997 15.5193 5.5797 15.9293 5.8797 16.1503C6.0197 16.2403 6.1697 16.3003 6.3397 16.3003C6.5707 16.3103 6.7897 16.1893 6.9297 16.0003L9.4397 12.7693L12.2897 14.9103L12.3797 14.9693C12.6997 15.1393 13.0997 15.0603 13.3297 14.7593ZM15.4497 3.7803C15.4097 4.0303 15.3897 4.2803 15.3897 4.5303C15.3897 6.7803 17.2097 8.5993 19.4497 8.5993C19.6997 8.5993 19.9397 8.5703 20.1897 8.5303V16.5993C20.1897 19.9903 18.1897 22.0003 14.7897 22.0003H7.4007C3.9997 22.0003 1.9997 19.9903 1.9997 16.5993V9.2003C1.9997 5.8003 3.9997 3.7803 7.4007 3.7803H15.4497Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SettingsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4022 13.5801C20.7599 13.7701 21.0359 14.0701 21.23 14.3701C21.6081 14.9901 21.5775 15.7501 21.2096 16.4201L20.4942 17.6201C20.1161 18.2601 19.4109 18.6601 18.6854 18.6601C18.3277 18.6601 17.9291 18.5601 17.6021 18.3601C17.3364 18.1901 17.0298 18.1301 16.7028 18.1301C15.691 18.1301 14.8428 18.9601 14.8121 19.9501C14.8121 21.1001 13.8719 22.0001 12.6967 22.0001H11.3068C10.1213 22.0001 9.18115 21.1001 9.18115 19.9501C9.16071 18.9601 8.31248 18.1301 7.30075 18.1301C6.9635 18.1301 6.65691 18.1901 6.40142 18.3601C6.0744 18.5601 5.66561 18.6601 5.31815 18.6601C4.58234 18.6601 3.87719 18.2601 3.49906 17.6201L2.79391 16.4201C2.41579 15.7701 2.39535 14.9901 2.77347 14.3701C2.93699 14.0701 3.24357 13.7701 3.59104 13.5801C3.87719 13.4401 4.06114 13.2101 4.23487 12.9401C4.74585 12.0801 4.43926 10.9501 3.5706 10.4401C2.55886 9.87011 2.23184 8.60011 2.81435 7.61011L3.49906 6.43011C4.0918 5.44011 5.35903 5.09011 6.38098 5.67011C7.27009 6.15011 8.4249 5.83011 8.9461 4.98011C9.10961 4.70011 9.20159 4.40011 9.18115 4.10011C9.16071 3.71011 9.27312 3.34011 9.46729 3.04011C9.84542 2.42011 10.5301 2.02011 11.2762 2.00011H12.7171C13.4734 2.00011 14.1581 2.42011 14.5362 3.04011C14.7202 3.34011 14.8428 3.71011 14.8121 4.10011C14.7917 4.40011 14.8837 4.70011 15.0472 4.98011C15.5684 5.83011 16.7232 6.15011 17.6225 5.67011C18.6343 5.09011 19.9117 5.44011 20.4942 6.43011L21.1789 7.61011C21.7717 8.60011 21.4446 9.87011 20.4227 10.4401C19.554 10.9501 19.2474 12.0801 19.7686 12.9401C19.9321 13.2101 20.1161 13.4401 20.4022 13.5801ZM9.10961 12.0101C9.10961 13.5801 10.4075 14.8301 12.012 14.8301C13.6164 14.8301 14.8837 13.5801 14.8837 12.0101C14.8837 10.4401 13.6164 9.18011 12.012 9.18011C10.4075 9.18011 9.10961 10.4401 9.10961 12.0101Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ChatIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.015C2 6.74712 6.21 2 12.02 2C17.7 2 22 6.65699 22 11.985C22 18.1642 16.96 22 12 22C10.36 22 8.54 21.5593 7.08 20.698C6.57 20.3876 6.14 20.1572 5.59 20.3375L3.57 20.9384C3.06 21.0986 2.6 20.698 2.75 20.1572L3.42 17.9139C3.53 17.6034 3.51 17.2729 3.35 17.0125C2.49 15.4301 2 13.6975 2 12.015ZM10.7 12.015C10.7 12.7261 11.27 13.2969 11.98 13.307C12.69 13.307 13.26 12.7261 13.26 12.025C13.26 11.314 12.69 10.7431 11.98 10.7431C11.28 10.7331 10.7 11.314 10.7 12.015ZM15.31 12.025C15.31 12.7261 15.88 13.307 16.59 13.307C17.3 13.307 17.87 12.7261 17.87 12.025C17.87 11.314 17.3 10.7431 16.59 10.7431C15.88 10.7431 15.31 11.314 15.31 12.025ZM7.37 13.307C6.67 13.307 6.09 12.7261 6.09 12.025C6.09 11.314 6.66 10.7431 7.37 10.7431C8.08 10.7431 8.65 11.314 8.65 12.025C8.65 12.7261 8.08 13.2969 7.37 13.307Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PasswordIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0107 14.6012C17.4247 14.6012 17.7607 14.2652 17.7607 13.8512V11.9992C17.7607 11.5852 17.4247 11.2492 17.0107 11.2492H11.3187C10.9947 10.1822 10.0127 9.39821 8.84069 9.39821C7.40669 9.39821 6.23969 10.5652 6.23969 11.9992C6.23969 13.4342 7.40669 14.6012 8.84069 14.6012C10.0127 14.6012 10.9947 13.8172 11.3187 12.7492H13.4307V13.8512C13.4307 14.2652 13.7667 14.6012 14.1807 14.6012C14.5947 14.6012 14.9307 14.2652 14.9307 13.8512V12.7492H16.2607V13.8512C16.2607 14.2652 16.5967 14.6012 17.0107 14.6012ZM7.66569 1.99921H16.3347C19.7227 1.99921 21.9997 4.37721 21.9997 7.91621V16.0832C21.9997 19.6222 19.7227 21.9992 16.3337 21.9992H7.66569C4.27669 21.9992 1.99969 19.6222 1.99969 16.0832V7.91621C1.99969 4.37721 4.27669 1.99921 7.66569 1.99921ZM7.73879 12.0001C7.73879 11.3921 8.23379 10.8981 8.84079 10.8981C9.44779 10.8981 9.94279 11.3921 9.94279 12.0001C9.94279 12.6071 9.44779 13.1011 8.84079 13.1011C8.23379 13.1011 7.73879 12.6071 7.73879 12.0001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PaperIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.92574 16.39H14.3119C14.7178 16.39 15.0545 16.05 15.0545 15.64C15.0545 15.23 14.7178 14.9 14.3119 14.9H8.92574C8.5198 14.9 8.18317 15.23 8.18317 15.64C8.18317 16.05 8.5198 16.39 8.92574 16.39ZM12.2723 9.9H8.92574C8.5198 9.9 8.18317 10.24 8.18317 10.65C8.18317 11.06 8.5198 11.39 8.92574 11.39H12.2723C12.6782 11.39 13.0149 11.06 13.0149 10.65C13.0149 10.24 12.6782 9.9 12.2723 9.9ZM19.3381 9.02561C19.5708 9.02292 19.8242 9.02 20.0545 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5099 22 16.0545 22H8.17327C5.59901 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.96535 2H13.2525C13.5099 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.203 9.01 17.0149 9.02C17.4381 9.02 17.8112 9.02316 18.1377 9.02593C18.3917 9.02809 18.6175 9.03 18.8168 9.03C18.9578 9.03 19.1405 9.02789 19.3381 9.02561ZM19.6111 7.566C18.7972 7.569 17.8378 7.566 17.1477 7.559C16.0527 7.559 15.1507 6.648 15.1507 5.542V2.906C15.1507 2.475 15.6685 2.261 15.9646 2.572C16.5004 3.13476 17.2368 3.90834 17.9699 4.67837C18.7009 5.44632 19.4286 6.21074 19.9507 6.759C20.2398 7.062 20.0279 7.565 19.6111 7.566Z"
        fill="currentColor"
      />
    </svg>
  );
};

export function BtnDeleteAll({ label, onClick }: BtnPropsType) {
  return (
    <button className="btn-delete-all btn-add-delete flex-m" onClick={onClick}>
      <MdDelete style={{ fontSize: 18 }} />
      <span className="ms-2">{label}</span>
    </button>
  );
}

export function BtnCloseModalJS({ label, onClick, customBtn }: BtnPropsType) {
  return (
    <button
      className={`close-modal auth-submit-annuler ${
        customBtn && "custom-btn-annuler"
      }`}
      type="button"
      onClick={onClick}
    >
      {label ? label : <IoClose />}
    </button>
  );
}

export const ButtonDelete: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <button
      className="btn with-tooltip btn-action-icon-delete"
      data-tooltip-content="Supprimer"
      type="button"
      {...rest}
      style={{ color: "#E53E3E" }}
    >
      <FaTrash />
    </button>
  );
};
