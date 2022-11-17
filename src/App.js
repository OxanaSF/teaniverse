import Directory from './components/directory/directory.component';

const App = () => {

const categories = [
  {
    id: 1,
    title: 'Breakfast club',
    imageUrl: `${process.env.PUBLIC_URL}/images/breakfast-tea.jpg`,
  },
  {
    id: 2,
    title: 'East is a delicate matters',
    imageUrl: `${process.env.PUBLIC_URL}/images/chinese-tea.jpg`,
  },
  {
    id: 3,
    title: "Breakfast at Tiffany's",
    imageUrl:
      'https://media.istockphoto.com/id/1015308848/photo/process-brewing-tea-tea-ceremony-cup-of-freshly-brewed-fruit-and-herbal-tea-dark-mood-hot.jpg?b=1&s=170667a&w=0&k=20&c=dajvJzXINuLLBxQk5X8Y6BhW59fEJ6Z0AeepD_n9nHg=',
  },
  {
    id: 4,
    title: 'Anti stress tea',
    imageUrl:
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?cs=srgb&dl=pexels-mareefe-1638280.jpg&fm=jpg&_gl=1*1qf8zg4*_ga*ODU4OTg3NDY2LjE2Njg2NDAyNzA.*_ga_8JE65Q40S6*MTY2ODY0MDI3MC4xLjEuMTY2ODY0MDczMi4wLjAuMA..',
  },
  {
    id: 5,
    title: 'Fruit tea club',
    imageUrl: `${process.env.PUBLIC_URL}/images/fruit-tea2.jpg`,
  },
];

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default App;
