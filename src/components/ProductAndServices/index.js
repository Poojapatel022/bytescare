import { useState } from 'react';
import Image from 'next/image';
import styles from './product.module.css';
import Link from 'next/link';

const productAndServices = ({productServices}) => {

  const [activeKey, setActiveKey] = useState('1');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="accordion" id="accordionExample" onSelect={handleSelect} defaultValue={activeKey} defaultChecked={activeKey} style={{background:'unset'}}>
      {productServices.map((item, index) => {
        return (
          <div className="row justify-content-between"  key={item.id}>
            <div class="col-md-5 justify-content-between">
              <Image class="img-fluid accordion-collapse collapse" id={item.collapseId} src={item.image} alt="product and services" width={640} height={390} aria-labelledby={item.headingId} data-bs-parent="#accordionExample" />
            </div>
            <div class="col-md-6 mt-2 py-2" style={{borderBottom: '0.5px solid #F0F0F0'}}>
              <div class="accordion-item" style={{background:'unset',color:'#ffff', border:'unset'}} >
                <h2 id={item.headingId} class="accordion-header" >
                  <button class="accordion-button collapsed"  style={{background:'unset', border:'unset' , borderBottom:'1px solid'}} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.collapseId}`} aria-expanded="false" aria-controls={item.collapseId}>
                    <div className={styles.headingCollapse}>
                      <h3 >{item.heading} </h3>
                    </div>
                  </button>
                </h2>
                <div id={item.collapseId} class="accordion-collapse collapse py-4" aria-labelledby={item.headingId} data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {item.description}
                    <div class="text-end mt-3">
                      <Link href=""  className={styles.extraInfo}>Know more <Image class="img-fluid ms-1" src="/droprighticon.svg" alt="dropdownArrow"width={10} height={10} /> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default productAndServices;
