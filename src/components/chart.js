import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) => _.round(_.sum(data)/(data.length));

export default (props) => {
	return (
		<div>
			<Sparklines data={props.data} height={120} width={150}>
						<SparklinesLine color={props.color} />
						<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.data)} {props.unit}
			</div>
		</div>
		);
}