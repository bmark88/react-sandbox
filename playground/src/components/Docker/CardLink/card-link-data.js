import rocket from '../../../assets/images/rocket.svg';
import downloadDocker from '../../../assets/images/download-docker.svg';
import guides from '../../../assets/images/guides.svg';
import whatsNew from '../../../assets/images/whats-new.svg';
import manuals from '../../../assets/images/manuals.svg';
import reference from '../../../assets/images/reference.svg';

const introResources = [
  {
    id: 1,
    imgUrl: rocket,
    title: 'Get started',
    description: 'Learn Docker basics and the benefits of containerizing your applications.'
  },
  {
    id: 2,
    imgUrl: downloadDocker,
    title: 'Download and install',
    description: 'Download and install Docker on your machine in a few easy steps.'
  },
  {
    id: 3,
    imgUrl: guides,
    title: 'Guides',
    description: 'Learn how to set up your Docker environment and start containerizing your applications.'
  },
  {
    id: 4,
    imgUrl: whatsNew,
    title: `What's new?`,
    description: 'Learn about the cool new features, updates, and bug fixes.'
  },
  {
    id: 5,
    imgUrl: manuals,
    title: 'Product manuals',
    description: 'Browse through the manuals and learn how to use Docker products.'
  },
  {
    id: 6,
    imgUrl: reference,
    title: 'Reference',
    description: 'Browse through the CLI and API reference documentation.'
  }
];

export { introResources };