import Card from '../components/Card'
import ponggif from '../assets/ponggif.gif'
import sortinggif from '../assets/sortinggif.gif'
import cavingif from '../assets/cavingif.gif'
import slimeingif from "../assets/slimeingif.gif"

export const Projects = () => {
  return (
    <div className='cardContainer'>
      <Card title="Slime-ing" 
            imgPath={slimeingif}
            bodyText='Created in a 2 week game jam, with 2 friends.
             Tools: GDScript/Godot'
            redirect='https://theatricalgrant.github.io/#/slimeing'
            />
      <Card title="Cavin" 
            imgPath={cavingif}
            bodyText='Created in 72 hours with a friend, for Ludum Dare 48.
             Tools: C#/Unity/WebGL'
            redirect='https://theatricalgrant.github.io/#/cavin'
            />
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
