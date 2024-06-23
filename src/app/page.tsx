import { AreaChartComponent } from "@/components/areaChart";
import { TableDataComponent } from "@/components/tableData";
import { areaChartProps } from "@/types";

export default function Home() {

  const chartdata = [
    {
      date: 'Ene 24',
      Guadalajara: 0,
      Culiacán: 2000,
      Monterrey: 1000
    },
    {
      date: 'Feb 24',
      Guadalajara: 4124,
      Culiacán: 3000,
      Monterrey: 2000
    },
    {
      date: 'Mar 24',
      Guadalajara: 2000,
      Culiacán: 4000,
      Monterrey: 1240      
    },
    {
      date: 'Abr 24',
      Guadalajara: 3000,
      Culiacán: 2000,
      Monterrey: 8121
    },
    {
      date: 'May 24',
      Guadalajara: 4000,
      Culiacán: 3000,
      Monterrey: 1000
    },
    {
      date: 'Jun 24',
      Guadalajara: 2000,
      Culiacán: 4000,
      Monterrey: 2000
    }
  ];

  const dataToShow: areaChartProps = {
    data: chartdata,
    index: 'date',
    categories: ['Guadalajara', 'Culiacán', 'Monterrey'],
    colors: ['green', 'blue', 'red'],
    yAxisWidth: 60
  };

  const headers = [
    { key: 'id', label: 'ID Venta' },
    { key: 'monstersSlayed', label: 'Monsters Slayed' },
    { key: 'region', label: 'Region' },
    { key: 'status', label: 'Status' }
  ];
  
  const data = [
    { id: 'Wilhelm Tell', monstersSlayed: 1, region: 'Uri, Schwyz, Unterwalden', status: 'National Hero' },
    { id: 'The Witcher', monstersSlayed: 129, region: 'Kaedwen', status: 'Legend' },
    { id: 'Mizutsune', monstersSlayed: 82, region: 'Japan', status: 'N/A' }
  ];
  

  return (
    <>
      <span className="font-bold text-4xl">Home</span>
      <div className="mt-4 bg-white bg-opacity-75">
        <div className="border-dashed w-full rounded-lg flex flex-row ">
          <div className="w-1/2 flex items-center justify-center mr-2 ml-2">
              <AreaChartComponent {...dataToShow}/>
          </div>
          <div className="w-1/2 flex items-center justify-center mr-2 ml-2">
            <AreaChartComponent {...dataToShow}/>
          </div>
        </div>
        <div className="mt-4">
          <TableDataComponent headers={headers} data={data} />
        </div>
      </div>
      
    </>
  );
}