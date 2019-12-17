import React from 'react'
import Layout from 'components/layout'
import Section from 'components/section'
import Hero from 'components/hero'
import Cards from 'components/cards'
import ProfileCard from 'components/profileCard'
import LogoList from 'components/logoList'
import { graphql } from 'gatsby'
import node from 'images/nodejslogo.png'
import gatsby from 'images/gatsby.png'
import laravel from 'images/laravel.png'

import tailwind from 'images/tailwind.png'
import contentful from 'images/contentful.png'
import sanity from 'images/sanity.png'
import redux from 'images/redux.png'

import twitter from 'images/twitter-brands.svg'
import instagram from 'images/instagram-brands.svg'
import github from 'images/github-alt-brands.svg'
import facebook from 'images/facebook-.svg'
import linkedin from 'images/linkedin-brands.svg'

const LogoListItem = [
  {
    image: gatsby,
    imageAlt: 'Gatsby Js',
    link: 'https://reactjs.org/'
  },
  {
    image: node,
    imageAlt: 'Node Js ',
    link: 'https://nodejs.org/en/'
  },
  {
    image: laravel,
    imageAlt: 'Laravel',
    link: 'https://laravel.com/'
  },
  {
    image: contentful,
    imageAlt: 'Contentful',
    link: 'https://www.contentful.com/'
  },
  {
    image: sanity,
    imageAlt: 'Sanity',
    link: 'https://www.sanity.io/'
  },
  {
    image: tailwind,
    imageAlt: 'Tailwind',
    link: 'https://tailwindcss.com/'
  },
  {
    image: redux,
    imageAlt: 'redux',
    link: 'https://redux.js.org/'
  }
]

const profilecard = {
  name: 'Leonardo Louie Ordonez',
  job: 'Software Engineer @ Unosoft Labs',
  location: 'Manila PH',
  social: [
    { image: twitter, link: 'https://twitter.com/louieofficial30', imageAlt: 'twitter' },
    { image: instagram, link: 'https://instagram.com/leonardolouie', imageAlt: 'twitter' },
    { image: github, link: 'https://github.com/leonardolouie', imageAlt: 'github' },
    { image: facebook, link: 'https://facebook.com/leonardolouie30', imageAlt: 'facebook' },
    {
      image: linkedin,
      link: 'https://www.linkedin.com/in/leonardo-louie-ordo%C3%B1ez-940673176/',
      imageAlt: 'linkedin'
    }
  ],
  description: 'Email: leonardolouie30@gmail.com'
}
const IndexPage = ({ data }) => {
  const { projects } = data
  return (
    <>
      <Layout>
        <Section style={'background__svg-random'}>
          <Hero
            title={'Software Engineer + Music Enthusiast'}
            body={
              'This is Leonardo Louie Ordoñez currently working as Software Engineer at Unosoft Labs. I am full stack developer which is aim to design the product until it is delivered to the user. Besides, I’m fond of making websites and mobile app: specialize on JAMSTACK (Static Site).'
            }
          ></Hero>
        </Section>
        <Section
          title="PROJECTS AND WORKS"
          subtitle="Below are samples of my previous works and ongoing projects made by progressive programming languages in the world"
          bottomTitle="See more ?"
          bottomTitleLink={'/project'}
        >
          {projects.edges.map((value, key) => (
            <Cards
              url={value.node.url}
              title={value.node.title}
              image={value.node.image.asset.fluid}
              imageAlt={value.node.image.caption}
              description={value.node.description}
              techTags={value.node.techUsed}
              key={key}
            />
          ))}
        </Section>

        <Section
          title="TECH STACK"
          subtitle="I've started my web development career by using Laravel PHP, CSS and JQUERY. As of the moment, I’m working for a year with lots of technologies encountered and used for the projects I made. In addition to that, I have learned more frameworks of JS such as Node and React. While, for DevOps part, I am currently using Heroku, Netlify and some services on AWS."
        >
          <LogoList logolistItem={LogoListItem} />
        </Section>

        <Section
          title="CONTACT ME"
          subtitle="If you’re interested to work with me, you can ping me from all the social media sites below:"
        >
          <ProfileCard {...profilecard} />
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject(filter: { show: { eq: true } }, limit: 6) {
      edges {
        node {
          title
          description
          url
          image {
            caption
            asset {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          description
          techUsed {
            site
            name
            image {
              caption
              asset {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`
