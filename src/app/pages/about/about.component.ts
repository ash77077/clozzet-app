import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {Router} from "@angular/router";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
}

interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    Button,
    NavbarComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  
  companyStats = [
    { number: '2018', label: 'Founded' },
    { number: '1000+', label: 'Companies Served' },
    { number: '50K+', label: 'Products Delivered' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  companyValues: CompanyValue[] = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards and exceeds client expectations.',
      icon: 'pi-star'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We work closely with each client to understand their unique needs and deliver solutions that drive results.',
      icon: 'pi-heart'
    },
    {
      title: 'Innovation',
      description: 'We continuously invest in new technologies, materials, and processes to provide cutting-edge textile solutions.',
      icon: 'pi-lightbulb'
    },
    {
      title: 'Sustainability',
      description: 'Environmental responsibility is at the core of our operations. We prioritize eco-friendly materials and sustainable practices.',
      icon: 'pi-globe'
    },
    {
      title: 'Reliability',
      description: 'Count on us for consistent quality, on-time delivery, and dependable service that keeps your business running smoothly.',
      icon: 'pi-shield'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, becoming a trusted extension of their team and supporting their growth.',
      icon: 'pi-users'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      image: 'assets/images/team/ceo.jpg',
      bio: 'With over 15 years in the textile industry, Sarah leads Clozzet with a vision of sustainable and innovative B2B solutions.',
      linkedin: 'https://linkedin.com/in/sarah-johnson'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Operations',
      image: 'assets/images/team/operations.jpg',
      bio: 'Michael ensures smooth operations and quality control across all our manufacturing processes and client deliveries.',
      linkedin: 'https://linkedin.com/in/michael-chen'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Sales Director',
      image: 'assets/images/team/sales.jpg',
      bio: 'Emily leads our sales team and works directly with B2B clients to understand their needs and deliver custom solutions.',
      linkedin: 'https://linkedin.com/in/emily-rodriguez'
    },
    {
      name: 'David Kim',
      position: 'Design & Innovation Lead',
      image: 'assets/images/team/design.jpg',
      bio: 'David heads our design team, constantly innovating new products and customization options for our clients.',
      linkedin: 'https://linkedin.com/in/david-kim'
    }
  ];

  companyMilestones: Milestone[] = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Clozzet was established with a mission to provide high-quality B2B textile solutions.',
      icon: 'pi-flag'
    },
    {
      year: '2019',
      title: 'First Major Contract',
      description: 'Secured our first enterprise client, delivering 5,000 custom polo shirts for a Fortune 500 company.',
      icon: 'pi-briefcase'
    },
    {
      year: '2020',
      title: 'Sustainability Initiative',
      description: 'Launched our eco-friendly product line and committed to carbon-neutral operations.',
      icon: 'pi-globe'
    },
    {
      year: '2021',
      title: 'Production Expansion',
      description: 'Expanded our manufacturing capacity by 200% to meet growing B2B demand.',
      icon: 'pi-building'
    },
    {
      year: '2022',
      title: 'Digital Transformation',
      description: 'Implemented advanced digital systems for better customer service and order tracking.',
      icon: 'pi-desktop'
    },
    {
      year: '2023',
      title: '1000+ Clients Milestone',
      description: 'Reached the milestone of serving over 1,000 businesses across various industries.',
      icon: 'pi-star'
    },
    {
      year: '2024',
      title: 'Innovation Lab',
      description: 'Opened our innovation lab to develop next-generation textile technologies and materials.',
      icon: 'pi-lightbulb'
    }
  ];

  certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'OEKO-TEX Standard 100', description: 'Textile Ecology Certification' },
    { name: 'GOTS Certified', description: 'Global Organic Textile Standard' },
    { name: 'Fair Trade Certified', description: 'Ethical Manufacturing Practices' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}
