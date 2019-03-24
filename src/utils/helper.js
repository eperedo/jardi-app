export function formatDate(date = new Date()) {
	const numberMonth = Number(date.getMonth()) + 1;
	const year = date.getFullYear();
	const month = numberMonth > 9 ? numberMonth : `0${numberMonth}`;
	const day = date.getDate();
	return `${year}-${month}-${day}`;
}
