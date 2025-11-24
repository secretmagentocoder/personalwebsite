# EmailJS Template Body

Copy and paste this HTML into your EmailJS template body field.

## Template HTML

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">

  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>

  <div

    style="

      margin-top: 20px;

      padding: 15px 0;

      border-width: 1px 0;

      border-style: dashed;

      border-color: lightgrey;

    "

  >

    <table role="presentation">

      <tr>

        <td style="vertical-align: top">

          <div

            style="

              padding: 6px 10px;

              margin: 0 10px;

              background-color: aliceblue;

              border-radius: 5px;

              font-size: 26px;

            "

            role="img"

          >

            👤

          </div>

        </td>

        <td style="vertical-align: top">

          <div style="color: #2c3e50; font-size: 16px">

            <strong>{{name}}</strong>

          </div>

          <div style="color: #7c8fa1; font-size: 13px; margin-top: 4px">{{from_email}}</div>

          <div style="color: #cccccc; font-size: 13px; margin-top: 4px">{{time}}</div>

          <p style="font-size: 16px; margin-top: 12px">{{message}}</p>

        </td>

      </tr>

    </table>

  </div>

</div>
```

## How to Update Your EmailJS Template

1. Go to https://dashboard.emailjs.com/
2. Navigate to **Email Templates**
3. Open your template: `template_q9078vn`
4. In the **Content** section, paste the HTML above
5. Make sure the **Subject** field contains: `Contact Form: {{subject}}`
6. Click **Save**

## Variables Used

- `{{name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{time}}` - Timestamp (automatically generated)
- `{{message}}` - Message content
- `{{subject}}` - Email subject (used in subject line)

All variables are automatically sent from the contact form.

