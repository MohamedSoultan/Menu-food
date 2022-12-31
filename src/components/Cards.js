import React from 'react';
import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Cards = ({ meal }) => {
  return (
    <div className="cards">
      {meal.length >= 1 ? (
        meal.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="box"
              initial={{ x: '-50vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 50,
                delayChildren: 0.3,
                staggerChildren: 0.2,
              }}
            >
              <Col sm="3">
                <img className="img-card" src={item.imgUrl} alt="" />
              </Col>
              <Col>
                <div className="Deteils">
                  <p className="title-card">{item.title}</p>
                  <p className="description">{item.desc}</p>
                  <p className="price">{item.price}</p>
                </div>
              </Col>
            </motion.div>
          );
        })
      ) : (
        <h1> No Meals Founded</h1>
      )}
    </div>
  );
};

export default Cards;
