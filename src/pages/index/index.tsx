import Layout from "components/Layout";
import Head from "next/head";
import React, { useRef, useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typist from "react-typist";
import dynamic from "next/dynamic";
import Arrow from "../../components/svg/arrow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { throttle } from "lodash";

const Logo = () => {
  return (
    <div className="h-auto w-auto max-w-sm max-h-sm flex justify-center items-center p-5 shadow-lg">
      <Arrow />
    </div>
  );
};

const Home = () => {
  const typistDelayMs = 3000;
  const wrapper = useRef(null);

  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  // const [slides, setSlides] = useState([slide1, slide2, slide3]);
  // const [slide, setSlide] = useState(0);
  // useEffect(() => {}, [slide]);

  // const onWheel = throttle((event) => {
  //   if (event.deltaY > 0) {
  //     setSlide(slide + 1);
  //   } else if (event.deltaY < 0) {
  //     setSlide(slide - 1);
  //   }
  //   event.preventDefault();
  //   event.stopPropagation();
  // }, 1000);

  // useEffect(() => {
  //   if (wrapper && wrapper.current) {
  //     wrapper.current.addEventListener("wheel", onWheel, false);
  //     return () => wrapper.current.removeEventListener("wheel", onWheel, false);
  //   }
  // }, [wrapper, wrapper.current]);

  // useEffect(() => {
  //   if (slides[slide] && slides[slide].current) {
  //     slides[slide].current.scrollIntoView();
  //   }
  // }, [slide]);
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.js" />
      </Head>

      <div className="wrapper text-center bg-black h-screen" ref={wrapper}>
        <div
          ref={slide1}
          className="item w-full h-screen overflow-hidden flex flex-col justify-center items-center text-white"
        >
          <Toolbar
            variant="dense"
            className="w-full h-10"
            style={{ position: "absolute", top: 0 }}
          >
            <Button color="inherit">Login</Button>
          </Toolbar>

          <h1 className="mt-auto font-normal">WebStarter</h1>
          <Logo />
          <h2>
            <Typist>
              special web experiences
              <Typist.Backspace
                count={"special web experiences".length}
                delay={typistDelayMs}
              />
              memorable mobile applications
              <Typist.Backspace
                count={"memorable mobile applications".length}
                delay={typistDelayMs}
              />
              coherent design and UX strategy
              <Typist.Backspace
                count={"coherent design and UX strategy".length}
                delay={typistDelayMs}
              />
              bulletproof code
            </Typist>
          </h2>
          <div className="mt-auto mb-5">
            <p>scoll down to learn more</p>
          </div>
        </div>

        <div
          ref={slide2}
          className="item bg-black w-full h-screen overflow-hidden flex flex-col justify-center items-center text-white"
        >
          <Container>
            <div className="flex flex-col w-full mt-10 lg:flex-row">
              <div className="flex-1 my-5">
                <h2 className="font-thin mb-1">Our services</h2>
                <h5 className="w-full">rapid prototyping</h5>
                <h5 className="w-full">web and mobile development</h5>
                <h5 className="w-full">design consulting</h5>
              </div>

              <div className="flex-1 my-5">
                <h2 className="font-thin mb-1">We can help with</h2>
                <h5 className="w-full">user research</h5>
                <h5 className="w-full">product development</h5>
                <h5 className="w-full">design consulting</h5>
              </div>

              <div className="flex-1 my-5">
                <h2 className="font-thin mb-1">We specialize in</h2>
                <h5 className="w-full">web engineering</h5>
                <h5 className="w-full">marketing design</h5>
                <h5 className="w-full">analytics</h5>
              </div>
            </div>
          </Container>
        </div>

        <div
          ref={slide3}
          className="item bg-black w-full h-screen overflow-hidden flex flex-col justify-center items-center text-white"
        >
          <Container>
            <div className="flex flex-col w-full mt-10 lg:flex-row">
              <div className="flex-1 my-5">
                <h2 className="font-thin mb-1">Our services</h2>
                <h5 className="w-full">rapid prototyping</h5>
                <h5 className="w-full">web and mobile development</h5>
                <h5 className="w-full">design consulting</h5>
              </div>

              <div className="flex-1 my-5">
                <h2 className="font-thin mb-1">We can help with</h2>
                <h5 className="w-full">user research</h5>
                <h5 className="w-full">product development</h5>
                <h5 className="w-full">design consulting</h5>
              </div>

              <div className="flex-1 my-5">
                <h2 className="font-thin mb-1">We specialize in</h2>
                <h5 className="w-full">web engineering</h5>
                <h5 className="w-full">marketing design</h5>
                <h5 className="w-full">analytics</h5>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          height: 100vh;
          width: 100%;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }
        .item {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
      `}</style>
      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;