import { Col, Row } from 'react-bootstrap';
import { Table } from 'rsuite';
import { mockUsers } from '../../component/table/sortingtable/tabledata';
import { useState } from 'react';

import "rsuite/dist/rsuite.css";

const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(13);

export const SortingTable = () => {
	const [sortColumn, setSortColumn] = useState();
	const [sortType, setSortType] = useState();
	const [loading, setLoading] = useState(false);

	const getData = () => {
		if (sortColumn && sortType) {
		return data.sort((a, b) => {
			let x = a[sortColumn];
			let y = b[sortColumn];
			if (typeof x === 'string') {
				x = x.charCodeAt();
			}
			if (typeof y === 'string') {
				y = y.charCodeAt();
			}
			if (sortType === 'asc') {
				return x - y;
			} else {
				return y - x;
			}
		});
		}
		return data;
	};

	const handleSortColumn = (sortColumn, sortType) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSortColumn(sortColumn);
			setSortType(sortType);
		}, 500);
	};
	return (
		<>
			<div className="container">
				<Row className='card'>
					<Col lg={12}>
						<div class="card-header flex-wrap">
							<div>
								<h4 class="card-title">Sorting Table</h4>
								<p class="m-0 subtitle">Default Datatables</p>
							</div>
							
						</div>
						<div className="card-body pt-0">
							<Table
								height={700}
								// width={100}
								data={getData()}
								sortColumn={sortColumn}
								sortType={sortType}
								onSortColumn={handleSortColumn}
								loading={loading}
								// style={{
								// 	height : "100%",
								// 	width : "100%"
								// }}
							>
								<Column width={70} align="center" fixed sortable>
									<HeaderCell>Id</HeaderCell>
									<Cell dataKey="id" />
								</Column>

								<Column fixed sortable
									width={180}
								>
									<HeaderCell>Name</HeaderCell>
									<Cell dataKey="name" />
								</Column>

								<Column sortable
									width={100}
								>
									<HeaderCell>Gender</HeaderCell>
									<Cell dataKey="gender" />
								</Column>

								<Column sortable
									width={80}
								>
									<HeaderCell>Age</HeaderCell>
									<Cell dataKey="age" />
								</Column>

								<Column sortable
									width={200}
								>
									<HeaderCell>Email</HeaderCell>
									<Cell dataKey="email" />
								</Column>
								<Column sortable
									width={180}
								>
									<HeaderCell>City</HeaderCell>
									<Cell dataKey="city" />
								</Column>
								<Column sortable
									width={150}
								>
									<HeaderCell>Phone</HeaderCell>
									<Cell dataKey="phone" />
								</Column>
							</Table>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)

}
export default SortingTable;