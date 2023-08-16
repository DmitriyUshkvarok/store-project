import css from './CustomBarChart.module.css';

const CustomBarChart = ({ data }) => {
  const totalValue = data.find(
    (item) => item.label === 'Общее количество'
  ).value;
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className={css.chartContainer}>
      <div className={css.chart}>
        {data.map((item, index) => (
          <div
            key={index}
            className={css.bar}
            style={{
              height: (item.value / maxValue) * 100 + '%',
              backgroundColor:
                item.label === 'Выполненные'
                  ? 'lightgreen'
                  : item.label === 'Активные'
                  ? 'lightcoral'
                  : '#8884d8',
            }}
          >
            <div className={css.label}>
              {item.label}:
              {item.label === 'Выполненные' || item.label === 'Активные'
                ? `${item.value}%`
                : item.value}
            </div>
            {/* <div className={css.tooltip}>
              {item.label}: {item.value}
            </div> */}
            <div className={css.tooltip}>
              {item.label}:
              {item.label === 'Общее количество' ? item.value : item.totalValue}
            </div>
          </div>
        ))}
      </div>
      <div className={css.legend}>
        <span
          className={css.legendItem}
          style={{ backgroundColor: 'lightgreen' }}
        >
          Выполненные
        </span>
        <span
          className={css.legendItem}
          style={{ backgroundColor: 'lightcoral' }}
        >
          Активные
        </span>
        <span className={css.legendItem} style={{ backgroundColor: '#8884d8' }}>
          Общее количество
        </span>
      </div>
    </div>
  );
};

export default CustomBarChart;
