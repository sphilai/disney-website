import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Detail() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState();
    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());
            }else{
                // redirect to home page;
            }
        })
    },[])

    return (
        <Container>
            <Background>
                    <img src={ movie && movie.backgroundImg}/> 
            </Background>
            <ImageTitle>
                   <img src={ movie && movie.titleImg}/> 
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png'/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png'/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png'/>
                </GroupWatchButton>

            </Controls>
            <SubTitle>
                { movie && movie.subTitle} 
            </SubTitle>
            <Descriptions>
                { movie && movie.description} 
            </Descriptions>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right 0;
    z-index:-1;
    opacity: 0.8;

    img{
        width:100%;
        height:100%
        object-fit: cover;

    }

`


const ImageTitle = styled.div`
    height:30vh;
    min-height: 170px;
    width:35vw;
    min-width:200px;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`

const Controls = styled.div`
    display:flex;
    align-items:center;

`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size:15px;
    padding: 0px 24px;
    margin-right: 25px;
    display:flex;
    align-items:center;
    height:56px;
    background: rgb(249,249,249);
    border: none;
    letter-space:1.5px;
    cursor:pointer;

    &:hover{
        background: rgb(198,198,198);
    }

`

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`

const AddButton = styled.button`
    margin-right: 16px; 
    height:44px;
    width:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor:pointer;

    span{
        font-size:30px;
        color: white;
    }

`

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0,0,0);
`

const SubTitle = styled.div`

    color: rgb(249,249,249);    
    font-size:15px;
    min-height:20px;
    padding-top:20px;
`

const Descriptions = styled.div`
    line-height: 1.4;
    font-size: 25px;
    margin-top:16px;
    color: rgb(249,249,249);  
    max-width:700px;
`
