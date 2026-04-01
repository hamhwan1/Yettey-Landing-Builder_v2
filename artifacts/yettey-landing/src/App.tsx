import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import AssetManagement from "@/pages/product/AssetManagement";
import AiCreation from "@/pages/product/AiCreation";
import VideoAutomation from "@/pages/product/VideoAutomation";
import TeamCollaboration from "@/pages/product/TeamCollaboration";
import ForCreators from "@/pages/use-cases/ForCreators";
import ForMarketers from "@/pages/use-cases/ForMarketers";
import ForTeams from "@/pages/use-cases/ForTeams";
import Blog from "@/pages/resources/Blog";
import Guides from "@/pages/resources/Guides";
import HelpCenter from "@/pages/resources/HelpCenter";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import { ScrollToTop } from "@/components/ScrollToTop";
import ViralShortsWithoutEditing from "@/pages/blog/ViralShortsWithoutEditing";
import AiToolsContentCreators from "@/pages/blog/AiToolsContentCreators";
import ShortFormVideoFramework from "@/pages/blog/ShortFormVideoFramework";
import ContentMarketingAi from "@/pages/blog/ContentMarketingAi";
import VideoEditingAutomation from "@/pages/blog/VideoEditingAutomation";
import GuideDetail from "@/pages/resources/GuideDetail";
import HelpDetailPage from "@/pages/resources/HelpDetail";
import UploadFailedHelp from "@/pages/resources/help/UploadFailed";
import VideoProcessingStuckHelp from "@/pages/resources/help/VideoProcessingStuck";
import CantFindFileHelp from "@/pages/resources/help/CantFindFile";
import OutOfCreditsHelp from "@/pages/resources/help/OutOfCredits";
import BillingIssueHelp from "@/pages/resources/help/BillingIssue";
import InviteTeamHelp from "@/pages/resources/help/InviteTeam";
import GuideOrganize from "@/pages/resources/GuideOrganize";
import GuideFind from "@/pages/resources/GuideFind";
import GuideShare from "@/pages/resources/GuideShare";
import GuideCollaborate from "@/pages/resources/GuideCollaborate";
import GuideActivate from "@/pages/resources/GuideActivate";
import GuideAiEditing from "@/pages/resources/GuideAiEditing";
import GuideSpeed from "@/pages/resources/GuideSpeed";
import GuideControl from "@/pages/resources/GuideControl";
import GuideVersions from "@/pages/resources/GuideVersions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/product/asset-management" component={AssetManagement} />
          <Route path="/product/ai-creation" component={AiCreation} />
          <Route path="/product/video-automation" component={VideoAutomation} />
          <Route path="/product/team-collaboration" component={TeamCollaboration} />
          <Route path="/use-cases/creators" component={ForCreators} />
          <Route path="/use-cases/marketers" component={ForMarketers} />
          <Route path="/use-cases/teams" component={ForTeams} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/viral-shorts-without-editing" component={ViralShortsWithoutEditing} />
          <Route path="/blog/ai-tools-content-creators" component={AiToolsContentCreators} />
          <Route path="/blog/short-form-video-framework" component={ShortFormVideoFramework} />
          <Route path="/blog/content-marketing-ai" component={ContentMarketingAi} />
          <Route path="/blog/video-editing-automation" component={VideoEditingAutomation} />
          <Route path="/guides" component={Guides} />
          <Route path="/guides/organize" component={GuideOrganize} />
          <Route path="/guides/find" component={GuideFind} />
          <Route path="/guides/share" component={GuideShare} />
          <Route path="/guides/collaborate" component={GuideCollaborate} />
          <Route path="/guides/activate" component={GuideActivate} />
          <Route path="/guides/ai-editing" component={GuideAiEditing} />
          <Route path="/guides/speed" component={GuideSpeed} />
          <Route path="/guides/control" component={GuideControl} />
          <Route path="/guides/versions" component={GuideVersions} />
          <Route path="/guides/:slug" component={GuideDetail} />
          <Route path="/help" component={HelpCenter} />
          <Route path="/help/upload-failed" component={UploadFailedHelp} />
          <Route path="/help/video-processing-stuck" component={VideoProcessingStuckHelp} />
          <Route path="/help/cant-find-file" component={CantFindFileHelp} />
          <Route path="/help/out-of-credits" component={OutOfCreditsHelp} />
          <Route path="/help/billing-issue" component={BillingIssueHelp} />
          <Route path="/help/invite-team" component={InviteTeamHelp} />
          <Route path="/help/:slug" component={HelpDetailPage} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
