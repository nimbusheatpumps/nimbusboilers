import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const posts = [
    {
      title: "Top Boiler Repair Tips for Scunthorpe Homes",
      date: "December 25, 2024",
      excerpt: "Boilers are the heart of your home's heating system, especially in colder areas like Scunthorpe and North Lincolnshire. Regular maintenance and knowing how to spot potential issues can save you time, money, and ensure your home stays warm and safe. Here are our top boiler repair tips specifically for Scunthorpe homeowners.",
      content: `
        <h2>1. Regular Boiler Servicing</h2>
        <p>The most important tip is to have your boiler serviced annually by a Gas Safe registered engineer. In Scunthorpe's harsh winters, this prevents breakdowns and ensures efficient operation. Our team at Nimbus Boilers & Heat Pumps recommends servicing before the heating season begins.</p>
        <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2169699497-scaled.jpg" alt="Gas Safe registered boiler servicing in Scunthorpe" style={{width: '100%', height: 'auto', display: 'block', margin: '20px 0', borderRadius: '8px'}} loading="lazy" />

        <h2>2. Check for Strange Noises</h2>
        <p>If your boiler starts making unusual sounds like banging, whistling, or gurgling, it could indicate air in the system or limescale buildup. Scunthorpe's hard water can accelerate limescale formation, so regular flushing is essential.</p>

        <h2>3. Monitor Water Pressure</h2>
        <p>Low water pressure is a common issue in Scunthorpe homes. Check your boiler's pressure gauge regularly - it should be between 1 and 1.5 bar. If it's lower, repressurize the system or call for professional help.</p>

        <h2>4. Bleed Radiators Regularly</h2>
        <p>Air trapped in radiators can cause cold spots and put extra strain on your boiler. Bleed your radiators every few months, especially after periods of inactivity. This simple maintenance task can prevent costly repairs.</p>

        <h2>5. Watch for Pilot Light Issues</h2>
        <p>If your boiler has a pilot light that keeps going out, it could be due to a faulty thermocouple or gas valve. Never attempt to relight it yourself if you're not Gas Safe registered - contact our experts in Scunthorpe immediately.</p>

        <h2>6. Clean and Maintain Flues</h2>
        <p>Blocked or damaged flues can lead to dangerous carbon monoxide buildup. Have your flue inspected and cleaned annually, particularly important in Scunthorpe's windy conditions that can affect flue performance.</p>

        <h2>7. Upgrade to Smart Controls</h2>
        <p>Consider installing smart thermostats and controls. These can optimize your boiler's efficiency, potentially saving you up to £500 annually on heating bills. We offer Hive smart thermostat installations with every boiler replacement.</p>

        <h2>8. Know When to Call Professionals</h2>
        <p>While some maintenance can be done DIY, complex repairs should always be left to qualified engineers. Signs you need professional help include:</p>
        <ul>
          <li>Boiler not heating water or radiators</li>
          <li>Strange smells from the boiler</li>
          <li>Water leaks around the boiler</li>
          <li>Boiler frequently switching off</li>
        </ul>

        <h2>Why Choose Nimbus Boilers & Heat Pumps in Scunthorpe?</h2>
        <p>As Gas Safe registered installers operating under the MCS umbrella scheme, we provide comprehensive boiler services across Scunthorpe, Grimsby, Doncaster, Lincoln, and all DN and LN postcodes. Our experienced engineers understand the unique challenges of North Lincolnshire homes and can help you qualify for the £7,500 Boiler Upgrade Scheme grant.</p>

        <div className="blog-cta">
          <a href="https://nimbusheatpumps.co.uk/gas-boiler-installation-scunthorpe/" className="cta-button">Book Your Boiler Service in Scunthorpe</a>
          <a href="#contact-form" className="cta-button">Get a Free Boiler Quote</a>
        </div>
      `,
      images: [
        { src: "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg", alt: "Boiler repair and maintenance in Scunthorpe homes" }
      ]
    },
    {
      title: "Gas Boiler Service Scunthorpe Guide",
      date: "December 26, 2024",
      excerpt: "Ensure your gas boiler in Scunthorpe is running efficiently with our comprehensive service guide. Learn about annual servicing, common issues, and why choosing Gas Safe registered engineers is crucial for your home's safety and performance.",
      content: `
        <h2>What is Gas Boiler Servicing?</h2>
        <p>Gas boiler servicing in Scunthorpe involves a thorough inspection and maintenance of your heating system by qualified Gas Safe registered engineers. This essential maintenance ensures your boiler operates safely and efficiently, preventing breakdowns during North Lincolnshire's cold winters.</p>
        <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126282-scaled.jpg" alt="Gas boiler servicing in Scunthorpe" style={{width: '100%', height: 'auto', display: 'block', margin: '20px 0', borderRadius: '8px'}} loading="lazy" />

        <h2>Why Annual Servicing Matters</h2>
        <p>Regular gas boiler service Scunthorpe residents should prioritize helps identify potential issues before they become major problems. It improves energy efficiency, reduces heating bills, and ensures compliance with safety standards. Our Nimbus Boilers & Heat Pumps team recommends servicing every 12 months.</p>

        <h2>What Happens During a Boiler Service?</h2>
        <p>During a professional gas boiler service in Scunthorpe, our engineers will:</p>
        <ul>
          <li>Check for gas leaks and carbon monoxide</li>
          <li>Clean and inspect burners and heat exchangers</li>
          <li>Test boiler pressure and water temperature</li>
          <li>Examine flue and ventilation systems</li>
          <li>Verify thermostat and control settings</li>
        </ul>

        <h2>Signs Your Boiler Needs Servicing</h2>
        <p>Don't wait for a breakdown. Watch for these signs that indicate your Scunthorpe gas boiler needs professional attention:</p>
        <ul>
          <li>Increased energy bills</li>
          <li>Unusual noises or smells</li>
          <li>Pilot light frequently going out</li>
          <li>Cold spots in radiators</li>
          <li>Boiler not responding to thermostat</li>
        </ul>

        <h2>Choose Gas Safe Registered Engineers</h2>
        <p>Always choose Gas Safe registered boiler engineers for servicing in Scunthorpe. This government-backed scheme ensures engineers are qualified and insured. At Nimbus Boilers & Heat Pumps, all our technicians are fully Gas Safe registered and experienced in North Lincolnshire properties.</p>

        <div className="blog-cta">
          <a href="https://nimbusheatpumps.co.uk/gas-boiler-service-scunthorpe/" className="cta-button">Book Gas Boiler Service in Scunthorpe</a>
          <a href="#contact-form" className="cta-button">Get a Free Quote</a>
        </div>
      `,
      images: [
        { src: "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126282-scaled.jpg", alt: "Gas boiler servicing in Scunthorpe" }
      ]
    },
    {
      title: "Boiler Installation North Lincolnshire Tips",
      date: "December 27, 2024",
      excerpt: "Planning a new boiler installation in North Lincolnshire? Our expert tips cover everything from choosing the right boiler to installation process and post-installation care for optimal performance and efficiency.",
      content: `
        <h2>Choosing the Right Boiler for Your North Lincolnshire Home</h2>
        <p>When selecting a boiler for installation in North Lincolnshire, consider your home's size, heating needs, and energy efficiency requirements. Gas boilers remain popular, but heat pumps and hybrid systems offer excellent alternatives. Our experts at Nimbus Boilers & Heat Pumps can help you choose the perfect system.</p>
        <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126283-scaled.jpg" alt="Boiler installation in North Lincolnshire" style={{width: '100%', height: 'auto', display: 'block', margin: '20px 0', borderRadius: '8px'}} loading="lazy" />

        <h2>Boiler Installation Process</h2>
        <p>Professional boiler installation North Lincolnshire requires careful planning. Our Gas Safe registered engineers follow these steps:</p>
        <ul>
          <li>Site survey and system design</li>
          <li>Removal of old boiler (if applicable)</li>
          <li>Installation of new boiler and flue</li>
          <li>Connection to gas, water, and electrical supplies</li>
          <li>System testing and commissioning</li>
        </ul>

        <h2>Preparation Tips for Boiler Installation</h2>
        <p>Before your boiler installation in North Lincolnshire:</p>
        <ul>
          <li>Clear access to installation area</li>
          <li>Ensure gas and electrical supplies are available</li>
          <li>Plan for potential disruption (1-2 days)</li>
          <li>Arrange alternative heating if needed</li>
        </ul>

        <h2>Post-Installation Care</h2>
        <p>After boiler installation North Lincolnshire homeowners should:</p>
        <ul>
          <li>Have the system serviced annually</li>
          <li>Bleed radiators regularly</li>
          <li>Monitor energy usage and bills</li>
          <li>Keep manufacturer's documentation</li>
        </ul>

        <h2>Boiler Upgrade Scheme Benefits</h2>
        <p>Take advantage of the £7,500 Boiler Upgrade Scheme grant available for North Lincolnshire residents. This government incentive makes upgrading to efficient heating systems more affordable. Contact Nimbus Boilers & Heat Pumps to see if you qualify.</p>

        <div className="blog-cta">
          <a href="https://nimbusheatpumps.co.uk/boiler-installation-north-lincolnshire/" className="cta-button">Get Boiler Installation Quote</a>
          <a href="#contact-form" className="cta-button">Learn About Boiler Upgrade Scheme</a>
        </div>
      `,
      images: [
        { src: "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126283-scaled.jpg", alt: "Boiler installation in North Lincolnshire" }
      ]
    },
    {
      title: "Heat Pump Maintenance Scunthorpe",
      date: "December 28, 2024",
      excerpt: "Keep your heat pump system in Scunthorpe operating at peak efficiency with regular maintenance. Discover essential maintenance tasks, seasonal checks, and professional servicing options for optimal performance.",
      content: `
        <h2>Why Heat Pump Maintenance Matters in Scunthorpe</h2>
        <p>Heat pumps provide efficient heating and hot water, but regular maintenance is crucial for Scunthorpe's variable climate. Proper care ensures optimal performance, extends system life, and maintains energy efficiency. Our Nimbus Boilers & Heat Pumps maintenance services keep your system running smoothly.</p>
        <img decoding="async" src="https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126284-scaled.jpg" alt="Heat pump maintenance in Scunthorpe" style={{width: '100%', height: 'auto', display: 'block', margin: '20px 0', borderRadius: '8px'}} loading="lazy" />

        <h2>Seasonal Maintenance Checklist</h2>
        <p>Perform these heat pump maintenance Scunthorpe tasks seasonally:</p>
        <h3>Spring:</h3>
        <ul>
          <li>Clean outdoor unit coils</li>
          <li>Check refrigerant levels</li>
          <li>Inspect electrical connections</li>
        </ul>
        <h3>Autumn:</h3>
        <ul>
          <li>Clear debris from outdoor unit</li>
          <li>Test thermostat settings</li>
          <li>Check drainage systems</li>
        </ul>

        <h2>DIY Heat Pump Care</h2>
        <p>Scunthorpe homeowners can perform basic maintenance:</p>
        <ul>
          <li>Keep outdoor unit clear of snow and debris</li>
          <li>Change air filters every 1-3 months</li>
          <li>Check for unusual noises or vibrations</li>
          <li>Ensure proper airflow around the unit</li>
        </ul>

        <h2>Professional Servicing</h2>
        <p>Annual professional heat pump maintenance Scunthorpe includes:</p>
        <ul>
          <li>Comprehensive system inspection</li>
          <li>Performance testing and efficiency checks</li>
          <li>Cleaning of coils and components</li>
          <li>Calibration of controls and sensors</li>
          <li>Documentation of system condition</li>
        </ul>

        <h2>Common Heat Pump Issues</h2>
        <p>Watch for these signs that indicate maintenance is needed:</p>
        <ul>
          <li>Reduced heating or cooling capacity</li>
          <li>Higher than normal energy bills</li>
          <li>Ice buildup on outdoor unit</li>
          <li>Strange noises during operation</li>
          <li>Frequent cycling on and off</li>
        </ul>

        <h2>Choose Experienced Technicians</h2>
        <p>For heat pump maintenance in Scunthorpe, trust MCS accredited installers like Nimbus Boilers & Heat Pumps. Our technicians are trained in the latest heat pump technologies and understand North Lincolnshire's specific requirements.</p>

        <div className="blog-cta">
          <a href="https://nimbusheatpumps.co.uk/heat-pump-maintenance-scunthorpe/" className="cta-button">Book Heat Pump Maintenance</a>
          <a href="#contact-form" className="cta-button">Get Expert Advice</a>
        </div>
      `,
      images: [
        { src: "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126284-scaled.jpg", alt: "Heat pump maintenance in Scunthorpe" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Top Boiler Repair Tips for Scunthorpe Homes | Nimbus Boilers & Heat Pumps</title>
        <meta name="description" content="Discover essential boiler repair tips tailored for homes in Scunthorpe. Learn how to maintain your boiler, spot common issues, and ensure safe, efficient heating with expert advice from Nimbus Boilers & Heat Pumps." />
        <meta name="keywords" content="boiler repair tips Scunthorpe, boiler maintenance North Lincolnshire, gas boiler troubleshooting Scunthorpe, heating system repair tips" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimbusheatpumps.co.uk/blog" />
      </Helmet>
      <main>
        {posts.map((post, index) => (
          <section key={index} className="blog-post-section section nimbus-section-base">
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <h1 className="blog-title">{post.title}</h1>
              <p className="blog-meta">Published on {post.date} | By Nimbus Boilers & Heat Pumps</p>
              {post.images.map((img, imgIndex) => (
                <img key={imgIndex} decoding="async" src={img.src} alt={img.alt} style={{width: '100%', height: 'auto', display: 'block', margin: '20px 0', borderRadius: '8px'}} loading="lazy" />
              ))}
              <p className="blog-intro">{post.excerpt}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </section>
        ))}
      </main>
      <style jsx>{`
        .blog-post-section {
          padding: 100px 32px;
          text-align: left;
        }
        .blog-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #1a1a1a;
        }
        .blog-meta {
          font-size: 14px;
          color: #666;
          margin-bottom: 30px;
        }
        .blog-intro {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 30px;
        }
        .blog-post-section h2 {
          font-size: 24px;
          font-weight: 600;
          margin: 40px 0 20px 0;
          color: #1a1a1a;
        }
        .blog-post-section p {
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 20px;
          color: #555;
        }
        .blog-post-section ul {
          margin: 20px 0;
          padding-left: 20px;
        }
        .blog-post-section li {
          margin-bottom: 10px;
          color: #555;
        }
        .blog-cta {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .blog-post-section {
            padding: 40px 20px;
          }
          .blog-title {
            font-size: 28px;
          }
          .blog-cta {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default Blog;