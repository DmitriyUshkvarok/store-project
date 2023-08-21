import css from './CustomBarChart.module.css';

const CustomBarChart = ({ data }) => {
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
                item.label === 'Виконано'
                  ? '#b8fbb8'
                  : item.label === 'Активні'
                  ? '#ffb4b4'
                  : '#8884d8',
            }}
          >
            <div className={css.label}>
              {item.label}:
              {item.label === 'Виконано' || item.label === 'Активні'
                ? `${item.value}%`
                : item.value}
            </div>
            <div className={css.tooltip}>
              {item.label}:
              {item.label === 'Загальна кількість'
                ? item.value
                : item.totalValue}
            </div>
          </div>
        ))}
      </div>
      <div className={css.legend}>
        <span className={css.legendItem} style={{ backgroundColor: '#b8fbb8' }}>
          Виконано
        </span>
        <span className={css.legendItem} style={{ backgroundColor: '#ffb4b4' }}>
          Активні
        </span>
        <span className={css.legendItem} style={{ backgroundColor: '#8884d8' }}>
          Загальна кількість
        </span>
      </div>
    </div>
  );
};

export default CustomBarChart;
