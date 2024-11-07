import Pagination from "./Pagination";

type CustomPaginationProps = {
	nbPages: number | any;
	page: number;
	onChange: (page: number, perPage: number) => any;
	perPage: number;
	label?: string;
};
export type PaginationProps = Omit<CustomPaginationProps, "nbPages">;
export function CustomPagination({ nbPages, page, perPage, onChange, label }: CustomPaginationProps) {
	if (parseInt(nbPages) <= 0) return null;
	return (
		<div className="d-flex align-items-baseline justify-content-between custom-paginate-padding">
			<div className="footer-form d-flex align-items-center gap-2 mt-3">
				<div className="footer-form-label">{label}</div>
				<select
					className="select-perpage"
					name="limit"
					id="limit"
					value={perPage}
					onChange={(e) => {
						onChange(1, parseInt(e.target.value, 10));
					}}
				>
					<option value="10">10</option>
					<option value="30">30</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
			</div>

			{parseInt(nbPages) > 0 ? (
				<Pagination
					page={page}
					total={nbPages / perPage}
					perPage={perPage}
					onPageChange={(page: number) => onChange(page, perPage)}
				/>
			) : null}
		</div>
	);
}
