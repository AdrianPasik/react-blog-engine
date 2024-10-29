import './App.css'
import NavBar from './navigation/NavBar'
import ParagraphHeader from './content/helpers/ParagraphHeader'
import Card from './content/Cards/Card'
import CardList4by4 from './content/Cards/CardList4by4'
import HorizontalGap4 from './content/helpers/HorizontalGap4'
import HorizontalGap10 from './content/helpers/HorizontalGap10'

function App() {

    return (
        <>
            <HorizontalGap4 />
            <NavBar />
            <HorizontalGap10 />
            <ParagraphHeader text='Technology used commercially (most important)' />
            <HorizontalGap10 />
            <CardList4by4>
                <Card name='React' experience='3 years' svgPath='/src/assets/react.svg'/>
                <Card name='C#' experience='12+ years' svgPath='/src/assets/csharp.svg'/>
                <Card name='Sql Server' experience='8 years' svgPath='/src/assets/sqlserver.svg'/>
                <Card name='PostgreSQL' experience='3 months' svgPath='/src/assets/postgresql.svg'/>
                <Card name='Git' experience='6 years' svgPath='/src/assets/git.svg'/>
                <Card name='.NET (in general)' experience='12+ years' svgPath='/src/assets/dotnet.svg'/>
                <Card name='Typescript' experience='2 years' svgPath='/src/assets/typescript.svg'/>
                <Card name='NodeJS' experience='2 years' svgPath='/src/assets/nodejs.svg'/>
                <Card name='Docker' experience='2 years' svgPath='/src/assets/docker.svg'/>
            </CardList4by4>
            <HorizontalGap10 />
            <ParagraphHeader text='Technology after hours' />
            <HorizontalGap10 />


            
        </>
    )
}

export default App
