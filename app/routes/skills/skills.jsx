import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './skills.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Skills',
    description: 'A list of software, tools, and technologies I use to do my thing',
  });
};

export const Skills = () => {
  return (
    <>
      <ProjectContainer className={styles.skills}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Skills"
          description="A somewhat comprehensive list of softwares, tools, apps, hardware, and more that I use on a daily basis to code and build things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Backend - Engineering</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://kafka.apache.org/">Apache Kafka</Link> as
                    data transport pipeline for most of my projects. It’s a great way to
                    decouple services and scale them independently.
                  </ListItem>
                  <ListItem>
                    I know my way around a few programming languages, but I primarily use{' '}
                    <Link href="https://www.typescriptlang.org/">TypeScript</Link>,
                    <Link href="https://deno.land/">Python</Link>,{' '}
                    <Link href="https://golang.org/">GoLang</Link>,{' '}
                    <Link href="https://www.java.com/">Java</Link> and{' '}
                    <Link href="https://isocpp.org/">C++</Link>
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://nestjs.com/">NestJS</Link> (built on top of{' '}
                    <Link href="https://expressjs.com/">Express.js</Link> and{' '}
                    <Link href="https://www.fastify.io/">Fastify</Link>) for building
                    efficient and scalable server-side applications. For APIs, I prefer
                    <Link href="https://fastapi.tiangolo.com/"> FastAPI</Link> for its
                    performance and ease of use. And for serving static files and reverse
                    proxying, I rely on <Link href="https://www.nginx.com/">Nginx</Link>.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://www.docker.com/">Docker</Link> for
                    containerization,{' '}
                    <Link href="https://kubernetes.io/">Kubernetes</Link> for
                    orchestration, and <Link href="https://aws.amazon.com/">AWS</Link>{' '}
                    (EC2, Elastic Beanstalk, ECS, S3, ELB, SQS, Lambda etc.) for cloud
                    infrastructure.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://www.mongodb.com/">MongoDB</Link> when I need
                    a flexible schema and{' '}
                    <Link href="https://www.postgresql.org/">PostgreSQL</Link> when I need
                    to ensure data integrity. It’s like having a Swiss Army knife for
                    databases! And when I need speed, I reach for{' '}
                    <Link href="https://redis.io/">Redis</Link> - it’s like the sports car
                    of databases!
                  </ListItem>
                  <ListItem>
                    I have experience in using{' '}
                    <Link href="https://git-scm.com/">GIT</Link>,{' '}
                    <Link href="https://github.com/manik-dhanjal">Github</Link> and
                    implementing{' '}
                    <Link href="https://github.com/features/actions">
                      CI/CD pipelines
                    </Link>
                  </ListItem>
                  <ListItem>
                    I’m currently learning about{' '}
                    <Link href="https://openai.com/">LLMs</Link> and{' '}
                    <Link href="https://www.google.com/search?q=agentic+AI">
                      Agentic AI
                    </Link>
                    . I’m also doing a research on optimizing the{' '}
                    <Link href="https://en.wikipedia.org/wiki/Byte_pair_encoding">
                      BPE
                    </Link>{' '}
                    algorithm for efficient pre-tokenization to enable better text
                    representation of languages other than English. I’m excited to see
                    where this research takes me and how it can contribute to the field of
                    AI and LLMs.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Frontend - UI/UX</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> and{' '}
                    <Link href="https://angular.io/">Angular</Link> are my front end
                    Javascript libraries of choice. The atomic component mental model is
                    the first thing that truly made sense to me as an engineer. I also use{' '}
                    <Link href="https://reactnative.dev/">React Native</Link> for mobile
                    app development.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </ListItem>
                  <ListItem>
                    For adding Styles I’ve used{' '}
                    <Link href="https://tailwindcss.com/">Tailwind CSS</Link> and{' '}
                    <Link href="https://mui.com/">Material UI</Link>. They help me build
                    responsive and visually appealing interfaces quickly. I also use{' '}
                    <Link href="https://styled-components.com/">Styled Components</Link>{' '}
                    for styling my React components and{' '}
                    <Link href="https://sass-lang.com/">Sass</Link> for writing more
                    maintainable and modular CSS.
                  </ListItem>
                  <ListItem>
                    I’m familiar with tools like{' '}
                    <Link href="https://graphql.org/">GraphQL</Link>,{' '}
                    <Link href="https://firebase.google.com/">Firebase</Link>,{' '}
                    <Link href="https://webrtc.org/">WebRTC</Link>,{' '}
                    <Link href="https://wordpress.org/">WordPress</Link>, and{' '}
                    <Link href="https://www.shopify.com/">Shopify</Link>. They are great
                    for building specific use cases and I’ve used them in various
                    projects.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from AdobeXD in 2022 and haven’t
                    looked back.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>MacOS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Chrome/Firefox</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitors</TableHeadCell>
                    <TableCell>2 - Dell UltraSharp 24" Monitors</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Logitech MX keys S</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech MX Master 3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Sony XM5/Apple Airpods</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
