import './App.css'
import ParagraphHeader from './content/helpers/ParagraphHeader'
import Card from './content/Cards/Card'
import CardList4by4 from './content/Cards/CardList4by4'
import HorizontalGap4 from './content/helpers/HorizontalGap4'
import HorizontalGap10 from './content/helpers/HorizontalGap10'
import CardList2by2 from './content/Cards/CardList2by2'
import LinkCard from './content/Cards/LinkCard'
import IconCsharp from './assets/csharp.svg'
import IconGithub from './assets/github.svg'
import IconLinkedIn from './assets/linkedin.svg'
import IconDotnet from './assets/dotnet.svg'
import IconSqlServer from './assets/sqlserver.svg'
import IconAzure from './assets/azure.svg'
import IconReact from './assets/react.svg'
import IconTypescript from './assets/typescript.svg'
import IconBlazor from './assets/blazor.svg'
import IconNodeJS from './assets/nodejs.svg'
import IconDocker from './assets/docker.svg'
import IconPostgres from './assets/postgresql.svg'
import IconGoogleCloud from './assets/gcloud.svg'
import IconPython from './assets/python.svg'
import IconNeuralNetworks from './assets/nn.svg'
import IconRedis from './assets/redis.svg'
import IconFinancial from './assets/financial.svg'
import IconManufacturing from './assets/manufacturing.svg'
import IconRealEstate from './assets/realestate.svg'
import IconUS from './assets/us.svg';
import IconGB from './assets/gb.svg';
import IconDK from './assets/denmark.svg';
import IconDE from './assets/germany.svg';


function App() {

    return (
        <>
            <HorizontalGap4 />
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
            <ParagraphHeader text='Contact:' />
            <HorizontalGap10 />
            <CardList2by2>
                <LinkCard name='LinkedIn' experience='disabled for a moment' svgPath={IconLinkedIn} />
                <LinkCard name='GitHub' experience='disabled for a moment' svgPath={IconGithub} />
            </CardList2by2>
            <HorizontalGap10 />
            <ParagraphHeader text='Technology used commercially (most important):' />
            <HorizontalGap4 />
            <CardList4by4>
                <Card name='.NET (whole ecosystem)' experience='12+ years' svgPath={IconDotnet} />
                <Card name='C#' experience='12+ years' svgPath={IconCsharp} />
                <Card name='Sql Server' experience='8 years' svgPath={IconSqlServer} />
                <Card name='Azure (whole ecosystem)' experience='4 years' svgPath={IconAzure} />
                <Card name='React' experience='3 years' svgPath={IconReact} />
                <Card name='Typescript' experience='2 years' svgPath={IconTypescript} />
                <Card name='Blazor' experience='2 years' svgPath={IconBlazor} />
                <Card name='NodeJS' experience='2 years' svgPath={IconNodeJS} />
                <Card name='Docker' experience='2 years' svgPath={IconDocker} />
                <Card name='PostgreSQL' experience='3 months' svgPath={IconPostgres} />
                <Card name='Google Cloud' experience='3 months' svgPath={IconGoogleCloud} />
            </CardList4by4>
            <HorizontalGap10 />
            <ParagraphHeader text='Technology after hours:' />
            <CardList4by4>
                <Card name='React' experience='' svgPath={IconReact} />
                <Card name='Python' experience='' svgPath={IconPython} />
                <Card name='NodeJS' experience='' svgPath={IconNodeJS}/>
                <Card name='Neural Networks' experience='' svgPath={IconNeuralNetworks} />
                <Card name='PostgreSQL' experience='' svgPath={IconPostgres} />
                <Card name='Redis' experience='' svgPath={IconRedis} />
            </CardList4by4>
            <ParagraphHeader text='Worked in industries:' />
            <HorizontalGap4 />
            <CardList4by4>
                <Card name='Banking industry' experience='' svgPath={IconFinancial}/>
                <Card name='Real estate' experience='' svgPath={IconRealEstate}/>
                <Card name='Manufacturing' experience='' svgPath={IconManufacturing}/>
            </CardList4by4>
            <ParagraphHeader text='On markets:' />
            <HorizontalGap4 />
            <CardList4by4>
                <Card name='USA' experience='' svgPath={IconUS}/>
                <Card name='Denmark' experience='' svgPath={IconDK}/>
                <Card name='Great Britain' experience='' svgPath={IconGB}/>
                <Card name='Germany' experience='' svgPath={IconDE}/>
            </CardList4by4>
            <HorizontalGap10 />



        </>
    )
}

export default App
