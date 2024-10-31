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
            <HorizontalGap4 />
            <ParagraphHeader text='About me:' />
            <HorizontalGap10 />
            <div className='mx-auto max-w-5xl font-sans font-normal text-lg text-gray-800 text-center'>
                <p>
                    Fullstack software developer. In 9-5 Mostly Microsoft technology but it is slowly moving towards NodeJS. 
                    <br />
                    Living in Poland, but I do projects across the EU.</p>
            </div>
            <HorizontalGap10 />
            <ParagraphHeader text='Technology used commercially (most important):' />
            <HorizontalGap4 />
            <CardList4by4>
                <Card name='.NET (whole ecosystem)' experience='12+ years' svgPath='/src/assets/dotnet.svg' />
                <Card name='C#' experience='12+ years' svgPath='/src/assets/csharp.svg' />
                <Card name='Sql Server' experience='8 years' svgPath='/src/assets/sqlserver.svg' />
                <Card name='Azure (whole ecosystem)' experience='4 years' svgPath='/src/assets/azure.svg' />
                <Card name='React' experience='3 years' svgPath='/src/assets/react.svg' />
                <Card name='Typescript' experience='2 years' svgPath='/src/assets/typescript.svg' />
                <Card name='Blazor' experience='2 years' svgPath='/src/assets/blazor.svg' />
                <Card name='NodeJS' experience='2 years' svgPath='/src/assets/nodejs.svg' />
                <Card name='Docker' experience='2 years' svgPath='/src/assets/docker.svg' />
                <Card name='PostgreSQL' experience='3 months' svgPath='/src/assets/postgresql.svg' />
                <Card name='Google Cloud' experience='3 months' svgPath='/src/assets/gcloud.svg' />
            </CardList4by4>
            <HorizontalGap10 />
            <ParagraphHeader text='Technology after hours:' />
            <CardList4by4>
                <Card name='React' experience='' svgPath='/src/assets/react.svg' />
                <Card name='Python' experience='' svgPath='/src/assets/python.svg' />
                <Card name='NodeJS' experience='' svgPath='/src/assets/nodejs.svg' />
                <Card name='Neural Networks' experience='' svgPath='/src/assets/nn.svg' />
                <Card name='PostgreSQL' experience='' svgPath='/src/assets/postgresql.svg' />
                <Card name='Redis' experience='' svgPath='/src/assets/redis.svg' />
            </CardList4by4>
            <ParagraphHeader text='Worked in industries:' />
            <HorizontalGap4 />
            <CardList4by4>
                <Card name='Banking industry' experience='' svgPath='/src/assets/financial.svg'/>
                <Card name='Real estate' experience='' svgPath='/src/assets/realestate.svg'/>
                <Card name='Manufacturing' experience='' svgPath='/src/assets/manufacturing.svg'/>
            </CardList4by4>
            <ParagraphHeader text='On markets:' />
            <HorizontalGap4 />
            <CardList4by4>
                <Card name='USA' experience='' svgPath='/src/assets/us.svg'/>
                <Card name='Denmark' experience='' svgPath='/src/assets/denmark.svg'/>
                <Card name='Great Britain' experience='' svgPath='/src/assets/gb.svg'/>
                <Card name='Germany' experience='' svgPath='/src/assets/germany.svg'/>
            </CardList4by4>
            <HorizontalGap10 />



        </>
    )
}

export default App
