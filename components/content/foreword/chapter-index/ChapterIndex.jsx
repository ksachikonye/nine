'use client'
import React, {useEffect, useRef} from "react"
import Header from "./components/Header"
import {Image} from "./components/Image"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Spectacular} from 'components/graphics/Mirrors/Spectacular'
import {Loader} from './Loader'
import GardenOfEarthlyDelights from 'components/content/foreword/GardenOfEarthlyDelights/GardenOfEarthlyDelights'
import {SelfDrivingCar} from 'components/content/foreword/Self-Driving-Car/SelfDrivingDar'
import {PassengerJet} from 'components/content/foreword/PassangerJet/PassengerJet'
import {Camera} from 'components/content/foreword/Camera/Camera'


const ChapterIndex = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/garden-of-earthly-delights" component={GardenOfEarthlyDelights} />
                <Route exact path="/self-driving-car" component={SelfDrivingCar} />
                <Route exact path="/passanger-jet" component={PassengerJet} />
                <Route exact path="/gallery" component={Camera} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}



function Home() {
  //Create a variable for our dom nodes

  return (
<header>
<Switch>
  <nav
    class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    <div class="px-6">
    
      <button
        class="border-0 bg-transparent px-2 py-3 text-xl leading-none md:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContentO"
        aria-controls="navbarSupportedContentO"
        aria-expanded="false"
        aria-label="Toggle navigation">

        <span class="[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
      </button>

  
      <div
        class="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
        id="navbarSupportedContentO"
        data-te-collapse-item>
        <ul
          class="mr-auto flex flex-col md:flex-row"
          data-te-navbar-nav-ref>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Home</a>
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Garden</a>
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Passanger</a>
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary "
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >SDC</a>
          </li>
             <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary "
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Camera</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </Switch>

  <div
    class="relative h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-screen"
    style="background-image: url('https://tecdn.b-cdn.net/img/Photos/Inne/ostia.jpg')">
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      style="background-color: rgba(2, 56, 53, 0.7)">
      <div class="flex h-full items-center justify-center">
                <Spectacular title='Foreword'/>
      </div>
    </div>
  </div>
</header>
  );
}
export default ChapterIndex;
