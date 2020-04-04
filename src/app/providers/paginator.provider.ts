import { MatPaginatorIntl } from '@angular/material/paginator';

export function PaginatorProvider() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Število oddaj na strani:';

  paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    const start = page * pageSize + 1;
    const end = (page + 1) * pageSize;
    return `${start} - ${end} od ${length}`;
  };

  return paginatorIntl;
}
