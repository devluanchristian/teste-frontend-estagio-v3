import GlobalStyled from "../../themes/global";

export interface IProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: IProps) => {
  return (
    <div>
      <GlobalStyled />
      {children}
    </div>
  );
};

export default PageContainer;
