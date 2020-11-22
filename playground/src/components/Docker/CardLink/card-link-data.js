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

const howDoI = {
  list1: {
    7: 'Write a Dockerfile',
    8: 'Write a Docker Compose file', 
    9: 'Share my image on Docker Hub', 
    10: 'Build and run an image', 
    11: 'Use multi-stage builds', 
    12: 'Run a command in a container',
  },
  list2: {
    13: 'Manage container networking',
    14: 'Work with volumes and bind mounts',
    15: 'Configure the Docker daemon',
    16: 'Manage Docker objects',
    17: 'Scale apps using Kubernetes',
    18: 'Scale apps using Swarm'
  }
};

const popularVideos = {
  list: {
    19: 'How to get started with Docker',
    20: 'How to build and test your Docker images in the Cloud',
    21: 'Simplify all the things with Docker Compose'
  }
};

export { introResources, howDoI, popularVideos };