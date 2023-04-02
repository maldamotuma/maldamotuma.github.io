import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AboutSection from "./components/AboutSection";
import { useContactForm } from "./components/contactform";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import MaldaAppbar from "./components/MaldaAppbar";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";

import 'swiper/css';
import "swiper/css/navigation";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import CalltoActionSection from "./components/CalltoActionSection";
import DiscountDialog from "./components/DiscountDialog";
import 'simplebar-react/dist/simplebar.min.css';
import { Box, Link, Theme, Typography, useMediaQuery } from "@mui/material";
import SmallSkill from "./components/SmallSkill";


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="#aaaaaa" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        maldamotuma.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const appbarDynamic = {
  testimonials: {
    bgcolor: "#ffffff",
    // bgcolor: "#ffffff",
    color: "#0A1929",
    // color: "#1C1439",
  },
  experience: {
    bgcolor: "#0A1929",
    color: "#ffffff"
  },
  portfolio: {
    bgcolor: "#263238",
    color: "#ffffff"
  }
};

const App = () => {
  const [inView, setInView] = useState<{ bgcolor: string; color: string } | null>(null);
  const { ref: testimonialsRef, inView: testimonialsInView, entry } = useInView({
    // threshold: .2
  });
  const { ref: heroRef, inView: heroInview, entry: heroEntry } = useInView({
    threshold: .2
  });
  const { ref: experienceRef, inView: experienceInview, entry: experienceEntry } = useInView({
    threshold: .4
  });
  const { ref: portfolioRef, inView: portfolioInview, entry: portfolioEntry } = useInView({
    threshold: 0
  });

  const small_matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));


  const { ContactFAB, floatingForm, openForm } = useContactForm();

  useEffect(() => {
    if (heroInview) {
      setInView(null);
    } else if (experienceInview) {
      setInView(appbarDynamic.experience);
    } else if (portfolioInview) {
      setInView(appbarDynamic.portfolio);
    } else if (testimonialsInView) {
      setInView(appbarDynamic.testimonials);
    }
  }, [testimonialsInView, heroInview, experienceInview, portfolioInview]);


  return (
    <div
      style={{
        backgroundColor: "#313131"
      }}
    >
      <DiscountDialog>
        {
          (closeDialog) => (
            <CalltoActionSection openForm={openForm} closeDialog={closeDialog} />
          )
        }
      </DiscountDialog>
      {
        floatingForm
      }
      {
        ContactFAB
      }
      <MaldaAppbar inView={inView} />
      <div
        ref={heroRef}
      >
        <Hero />
        <AboutSection />
        <ServicesSection />
      </div>
      <div
        ref={experienceRef}
        style={{
          margin: 0
        }}
      >
        {
          small_matches ?
            <ExperienceSection />
            :
            <SmallSkill />
        }
      </div>
      <div
        ref={portfolioRef}
      >
        <PortfolioSection />
      </div>
      <div
        ref={testimonialsRef}
      >
        <TestimonialsSection />
        <CalltoActionSection openForm={openForm} />
        <Box sx={{ py: 10, bgcolor: "#ffffff" }} />
        <ContactSection />
      </div>
      <Box
        sx={{
          bgcolor: "#03010d"
        }}
      >
        <Copyright
          sx={{
            py: 3,
            bgcolor: "03010d"
          }}
        />
      </Box>
    </div>
  );
}

export default App;