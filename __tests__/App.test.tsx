import { render, waitFor } from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
  test('renders correctly', async () => {
    const { toJSON } = render(<App />);
    await waitFor(() => {
      const tree = toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
