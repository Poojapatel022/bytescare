import React from 'react'
import styles from '../Footer/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#262833' }}>
        <div class="container py-5">
          <div class="row mx-auto" >
            <div class="col-lg-3 col-md-6 mb-4" style={{ fontSize: "14px" }}>
              <Link class="navbar-brand" href="#">
                <Image src="/bytescarelogoFooter.svg" alt="" width="213" height="30" />
              </Link>
              <p class="text-white mt-4" >2055 Limestone Rd, STE 200-C, Wilmington, New Castle, DE 19808</p>
              <p class="text-white" >Phone: +91 8756-621035 <br />
                Email: contact@bytescare.com</p>
            </div>

            <div class="col-lg-2 col-md-6 mb-4">
              <h3 class="text-white mb-4" style={{fontSize:'16px' }}>Useful Links</h3>

              <ul class="list-unstyled" style={{ fontSize: "14px" }} >
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">Home</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">About Us</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">Product & Services</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">Blog</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">FAQs</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">Contact Us</p>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4">
              <h3 class=" mb-4 text-white" style={{fontSize:'16px' }}>Key Services</h3>

              <ul class="list-unstyled" style={{ fontSize: "14px" }}>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white ">Web Monitoring</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">E-commerce Monitoring</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">Content Security Audit</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">Text Maker</p>
                </li>
                <li class="mb-2 lh-base">
                  <p class="text-decoration-none text-white">Image Identifier</p>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h3 class="text-white mb-4" style={{fontSize:'16px' }}>Join Our Community</h3>
              <div class="form-outline form-white mb-4">
                <p class="text-white fs-14">Stay up to date with our products and offerings</p>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Enter an email address" aria-label="email" aria-describedby="button-addon2" />
                  <button class="btn text-white fw-bold" style={{backgroundColor:'#ffa300', height:'50px'}} type="button" id="button-addon2">Join Us</button>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div class="text-center text-white" style={{ backgroundColor: 'rgba(111,135,150,.3)'}}>
         <p class="text-white py-3 m-0">© Copyright 2022 Bytescare Inc. All rights reserved</p>
        </div>
      </footer>
  ) 
}
