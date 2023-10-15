import React from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

async function infraRedSleep() {
  const res = await fetch(`https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/sleep/infraredSleep.json`)
  const data = res.json
  const metricArray = []
  for (const duration in data) {
       metricArray.push(data[duration])
  }
  return metricArray
}

const durationSeries = infraRedSleep()


const durationLine = {
  series: [
    {
      data: durationSeries,
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00EBFF"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};

async function Awake() {
  const res = await fetch(`https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/sleep/infraredSleep.json`)
  const data = res.json
  const metricArray = []
  for (const awake in data) {
       metricArray.push(data[awake])
  }
  return metricArray
}

const awakeSeries = Awake()

const awakeLine = {
  series: [
    {
      data: awakeSeries,
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FB8F65"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};

async function REMsleep() {
  const res = await fetch(`https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/sleep/infraredSleep.json`)
  const data = res.json
  const metricArray = []
  for (const rem in data) {
       metricArray.push(data[rem])
  }
  return metricArray
}

const remSeries = REMsleep()
const remLine = {
  series: [
    {
      data: remSeries,
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#5743BE"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};

async function deepSleep() {
  const res = await fetch(`https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/sleep/infraredSleep.json`)
  const data = res.json
  const metricArray = []
  for (const deep in data) {
       metricArray.push(data[deep])
  }
  return metricArray
}

const deepSeries = deepSleep()
const deepLine = {
  series: [
    {
      data: deepSeries,
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#5743BE"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};

const statistics = [
  {
    name: durationLine,
    title: "Duration",
    average: "3,564",
    bg: "bg-[#E5F9FF] dark:bg-slate-900	",
    text: "text-info-500",
    icon: "heroicons:shopping-cart",
  },
  {
    name: awakeLine,
    title: "Awake",
    average: "3,564",
    bg: "bg-[#FFEDE6] dark:bg-slate-900	",
    text: "text-warning-500",
    icon: "heroicons:cube",
  },
  {
    name: remLine,
    title: "REM",
    average: "+5.0%",
    bg: "bg-[#EAE6FF] dark:bg-slate-900	",
    text: "text-[#5743BE]",
    icon: "heroicons:arrow-trending-up-solid",
  },
    {
    name: deepLine,
    title: "Deep Sleep",
    average: "+5.0%",
    bg: "bg-[#EAE6FF] dark:bg-slate-900	",
    text: "text-[#5743BE]",
    icon: "heroicons:arrow-trending-up-solid",
  }
];

const GroupChart2 = () => {
  return (
    <>
      {" "}
      {statistics.map((item, i) => (
        <div key={i}>
          <Card bodyClass="pt-4 pb-3 px-4">
            <div className="flex space-x-3 rtl:space-x-reverse">
              <div className="flex-none">
                <div
                  className={`${item.bg} ${item.text} h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl`}
                >
                  <Icon icon={item.icon} />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-slate-600 dark:text-slate-300 text-sm mb-1 font-medium">
                  {item.title}
                </div>
                <div className="text-slate-900 dark:text-white text-lg font-medium">
                  {item.average}
                </div>
              </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto max-w-[124px]">
              <Chart
                options={item.name.options}
                series={item.name.series}
                type="area"
                height="41"
                width="124"
              />
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export default GroupChart2;
