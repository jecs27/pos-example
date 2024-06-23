export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type areaChartProps = {
  data: any;
  index: string;
  categories: string[];
  colors: string[];
  valueFormatter?: (number: number) => string;
  yAxisWidth?: number;
  onValueChange?: (value: any) => void;
}