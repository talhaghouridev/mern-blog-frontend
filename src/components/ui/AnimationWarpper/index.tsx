import React, { ReactNode } from "react";
import { motion, AnimatePresence, AnimationProps } from "framer-motion";
import { memo } from "react";
import cn from "@utils/cn";

interface AnimationWrapperProps {
  children: ReactNode;
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  transition?: AnimationProps["transition"];
  className?: string;
  key?: number;
  style?: React.CSSProperties;
}

const AnimationWrapper = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className = "",
  key = 1,
  style = {},
}: AnimationWrapperProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={key}
          initial={initial}
          animate={animate}
          transition={transition}
          className={cn(`max-w-fit `, className)}
          style={style}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default memo(AnimationWrapper);
