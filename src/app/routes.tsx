import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesOverview } from './pages/ServicesOverview';
import { Platform } from './pages/Platform';
import { WhyAccessibility } from './pages/WhyAccessibility';
import { About } from './pages/About';
import { Contracts } from './pages/Contracts';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
import { WebsiteMonitoring } from './pages/services/WebsiteMonitoring';
import { RemediationAudit } from './pages/services/RemediationAudit';
import { WebsiteRemediation } from './pages/services/WebsiteRemediation';
import { DocumentRemediation } from './pages/services/DocumentRemediation';
import { Checker } from './pages/Checker';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: ServicesOverview },
      { path: 'platform', Component: Platform },
      { path: 'why-accessibility', Component: WhyAccessibility },
      { path: 'about', Component: About },
      { path: 'contracts', Component: Contracts },
      { path: 'resources', Component: Resources },
      { path: 'contact', Component: Contact },
      { path: 'checker', Component: Checker },
      { path: 'services/website-monitoring', Component: WebsiteMonitoring },
      { path: 'services/remediation-audit', Component: RemediationAudit },
      { path: 'services/website-remediation', Component: WebsiteRemediation },
      { path: 'services/document-remediation', Component: DocumentRemediation },
    ],
  },
]);