// Components
const HomeComponent = {
  render: () => {
    return document.querySelector('#inicio').innerHTML
  }
}
const mapas = {
  render: () => {
    return document.querySelector('#mapas').innerHTML;
  }
}
const tabelas = {
  render: () => {
    return document.querySelector('#tabelas').innerHTML;
  }
}
const swf = {
  render: () => {
    return document.querySelector('#swf').innerHTML;
  }
}

const emuladorswf = {
  render: () => {
    return document.querySelector('#emulador-swf').innerHTML;
  }
}
const jar = {
  render: () => {
    return document.querySelector('#jar').innerHTML;
  }
}
const emuladorjar = {
  render: () => {
    return document.querySelector('#emulador-jar').innerHTML;
  }
}
const apk = {
  render: () => {
    return document.querySelector('#apk').innerHTML;
  }
}
const ErrorComponent = {
  render: () => {
    return `
    <section>
    <h1>Error</h1>
    <p>This is just a test</p>
    </section>
    `;
  }
}

// Routes
const routes = [{
  path: '/',
  component: HomeComponent,
},
  {
    path: '/swf',
    component: swf,
  },
  {
    path: '/emuladores-swf',
    component: emuladorswf,
  },
  {
    path: '/jar',
    component: jar,
  },
  {
    path: '/emulador-jar',
    component: emuladorjar,
  },
  {
    path: '/apk',
    component: apk,
  },
    {
    path: '/mapas',
    component: mapas,
  },
    {
    path: '/tabelas',
    component: tabelas,
  }
];
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const {
    component = ErrorComponent
  } = findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.getElementById('app').innerHTML = component.render();
};
window.addEventListener('hashchange', router);
window.addEventListener('load', router);