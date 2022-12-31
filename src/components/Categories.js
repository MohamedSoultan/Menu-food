import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Categories = ({ serachByFilter, allCategory }) => {
  const onFilter = (cat) => {
    serachByFilter(cat);
  };

  const animated = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        // delay: 0.3,
        stiffness: 150,
      },
      type:"spring"
    },
  };

  return (
    <>
      <Col className="categories">
        {allCategory.length >= 1
          ? allCategory.map((cate) => {
              return (
                <motion.div
                  className="pearnt-btn-cat"
                  variants={animated}
                  inherit="hidden"
                  animate="visible"
                >
                  <Button className="btn-cat" onClick={() => onFilter(cate)}>
                    {cate}
                  </Button>
                </motion.div>
              );
            })
          : null}
      </Col>
    </>
  );
};

export default Categories;
