import Card from '../components/Card'

export const Projects = () => {
  return (
    <div className='cardContainer'>
      <Card title="Pong" 
            imgPath='src\assets\ponggif.gif'
            bodyText='A project made to improve my C++ skills, where I recreated pong.
             Tools: C++/SDL2'
            redirect='https://github.com/TheatricalGrant/RetroGamesRecreated'
            />
      <Card title="Sorting Algorithm Visualizer" 
            imgPath='src\assets\sortinggif.gif'
            bodyText='A project made to expand my algorithm knowledge.
             Tools: C++/SDL2'
            redirect='https://github.com/TheatricalGrant/SimpleSortVisualizer'
            />
    </div>
  )
}
