import Card from '../components/Card'
import ponggif from 'https://github.com/TheatricalGrant/theatricalgrant.github.io/blob/main/src/assets/ponggif.gif'
import sortinggif from 'https://github.com/TheatricalGrant/theatricalgrant.github.io/blob/main/src/assets/sortinggif.gif'

export const Projects = () => {
  return (
    <div className='cardContainer'>
      <Card title="Pong" 
            imgPath={ponggif}
            bodyText='A project made to improve my C++ skills, where I recreated pong.
             Tools: C++/SDL2'
            redirect='https://github.com/TheatricalGrant/RetroGamesRecreated'
            />
      <Card title="Sorting Algorithm Visualizer" 
            imgPath={sortinggif}
            bodyText='A project made to expand my algorithm knowledge.
             Tools: C++/SDL2'
            redirect='https://github.com/TheatricalGrant/SimpleSortVisualizer'
            />
    </div>
  )
}
