import Card from '../components/Card'

export const Projects = () => {
  return (
    <div className='cardContainer'>
      <Card title="Pong" 
            imgPath='src\assets\ponggif.gif'
            bodyText='This is'
            redirect='https://github.com/TheatricalGrant/RetroGamesRecreated'
            />
      <Card title="Sorting Algorithm Visualizer" 
            imgPath='src\assets\sortinggif.gif'
            bodyText='This is'
            redirect='https://github.com/TheatricalGrant/SimpleSortVisualizer'
            />
    </div>
  )
}
