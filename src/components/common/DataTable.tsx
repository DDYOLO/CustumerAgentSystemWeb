import { Table } from "antd";
import type { TableProps } from "antd";

export function DataTable<T extends object>(props: TableProps<T>) {
  return <Table<T> rowKey={(record) => String((record as { id?: string }).id ?? JSON.stringify(record))} {...props} />;
}
