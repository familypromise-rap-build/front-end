//UI
import { Card, Typography, Form, Checkbox } from 'antd';
const { Title, Text } = Typography;

export default function AdditionalInformation({
  role,
  formValues,
  handleCheckBoxChange,
}) {
  const introMessage = {
    tenant:
      'Please place a checkmark next to all of the statements below that are true for you and/or somebody in your household:',
    landlord:
      'Please place a checkmark next to all of the statements below that are true for your tenant:',
  };

  const setIntroMessage = role => {
    if (role === 'landlord') {
      return introMessage.landlord;
    } else {
      return introMessage.tenant;
    }
  };

  return (
    <div>
      <Card title={<Title level={4}>Additional Information</Title>}>
        <Text type="secondary">{setIntroMessage(role)}</Text>
        <Form.Item style={{ marginTop: '10px' }}>
          <Checkbox
            checked={formValues.minorGuest}
            name="minorGuest"
            onChange={handleCheckBoxChange}
          >
            Household has at least one minor (17 or younger) or at least one
            person is pregnant?
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Checkbox
            checked={formValues.unEmp90}
            name="unEmp90"
            onChange={handleCheckBoxChange}
          >
            Been unemployed for 90+ Days?
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox
            checked={formValues.foodWrkr}
            name="foodWrkr"
            onChange={handleCheckBoxChange}
          >
            At least one person in the household worked in the food service
            industry at any time since January 1, 2020?
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Checkbox
            checked={formValues.covidFH}
            name="covidFH"
            onChange={handleCheckBoxChange}
          >
            Have been impacted by Covid.
          </Checkbox>
        </Form.Item>
      </Card>
    </div>
  );
}