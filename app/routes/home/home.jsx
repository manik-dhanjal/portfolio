import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import shaliniNarayanan from '~/assets/shalini-narayanan-desktop.png';
import shaliniNarayananLarge from '~/assets/shalini-narayanan-desktop-large.png';
import shaliniNarayananPlaceholder from '~/assets/shalini-narayanan-desktop-placeholder.jpg';
import meswakLogin from '~/assets/meswak-login.jpeg';
import meswakViewSurvey from '~/assets/meswak-view-survey.jpeg';
import thinkinghatzzzDesktopLarge from '~/assets/thinkinghatzzz-desktop-large.png';
import thinkinghatzzzDesktop from '~/assets/thinkinghatzz-desktop.png';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Engineer + Designer',
    description: `Building portfolio of ${config.name} — a software engineer working on web & mobile apps with a focus on motion, experience design, and scalability.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Dr. Shalini Narayanan's Portfolio"
        description="Design and development of a portfolio website for Dr. Shalini Narayanan, a former Indian Information Service officer."
        buttonText="View project"
        buttonLink="https://shalininarayanan.in"
        model={{
          type: 'laptop',
          alt: 'Dr. Shalini Narayanan’s portfolio website',
          textures: [
            {
              srcSet: `${shaliniNarayanan} 1280w, ${shaliniNarayananLarge} 2560w`,
              placeholder: shaliniNarayananPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Meswak Survey App"
        description="A role-based survey app for collecting customer feedback. Surveyors login to conduct surveys; admins manage data and download CSV reports. Includes surveyor registration for easy field management."
        buttonText="Download app"
        buttonLink="https://www.dropbox.com/scl/fi/hl29q2mzrucroufc7fmeb/meswak.apk?rlkey=l0peotqyp1wgikzc9oq2dzbkv&st=pt627veg&dl=0"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${meswakLogin} 375w, ${meswakLogin} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${meswakViewSurvey} 375w, ${meswakViewSurvey} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Thinkinghatzzz"
        description="A modern, responsive portfolio website for ThinkingHatzz built with WordPress and Elementor, enabling easy content updates and effectively showcasing the agency’s services and clients."
        buttonText="View project"
        buttonLink="https://thinkinghatzzz.com"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${thinkinghatzzzDesktop} 1280w, ${thinkinghatzzzDesktopLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
