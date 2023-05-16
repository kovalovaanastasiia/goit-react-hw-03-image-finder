import {ColorRing} from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        display: 'block',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#3f51b5', '#f6e947', '#3f51b5', '#f6e947', '#3f51b5']}
    />
  )
}
