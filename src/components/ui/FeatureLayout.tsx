import React, {FC} from 'react';
import {Layout, PageHeader} from 'antd';
import {
  useHistory
} from 'react-router-dom'
import './FeatureLayout.css'

interface AppLayoutProps {
  pageTitle?: string,
  goBackPath?: string,
  children: React.ReactNode,
}

const {Content} = Layout;


const FeatureLayout: FC<AppLayoutProps> = ({pageTitle, goBackPath, children}) => {
  const history = useHistory();
  const headerProps = {
    onBack: goBackPath ? () => history.goBack() : undefined
  }
  return (<div>
    <PageHeader
      style={{backgroundColor: "black"}}
      title={<div>{pageTitle}</div>}
      {
        ...headerProps
      }
    />
    <Content style={{margin: 16}}>
      {children}
    </Content>
  </div>);
};

export default FeatureLayout;

