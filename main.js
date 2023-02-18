
import { render, router } from './lib';
import blog from './src/comprent/page/blog'

import ProjectDetailPage from './src/comprent/page/project-detail';
const app = document.querySelector( "#app" )
router.on( "/blog", () => render( blog, app ) );

router.on( "/project/:projectId", ( { data } ) => render( () => ProjectDetailPage( data ), app ) );

router.resolve();


