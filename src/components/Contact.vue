<template>
  <section class="contact section-inner" id="contact">
    <div class="section-header">
      <h2>{{ t('contact') }}</h2>
      <p class="section-subtitle">Get in touch with our team</p>
    </div>
    
    <div class="contact-grid">
      <form class="contact-form card-soft" @submit.prevent="onSubmit">
        <h3>Send us a message</h3>
        <p class="lead">Speak with an advisor today for a free consultation and tailored quote.</p>
        
        <div class="form-group">
          <label for="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required 
            placeholder="Enter your full name"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required 
            placeholder="Enter your email address"
          />
        </div>
        
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="form.phone" 
            placeholder="Enter your phone number"
          />
        </div>
        
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            rows="6" 
            required 
            placeholder="How can we help you?"
          ></textarea>
        </div>
        
        <button type="submit" class="btn-primary">
          <span>Send Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
          </svg>
        </button>
      </form>
      
      <aside class="contact-info card-soft">
        <h4>Contact EHIS</h4>
        <div class="contact-detail">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
          </div>
          <div class="contact-text">
            <strong>Address:</strong> {{ t('ehis_address') }}
          </div>
        </div>
        
        <div class="contact-detail">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
          </div>
          <div class="contact-text">
            <strong>Phone:</strong> {{ t('ehis_phone') }}
          </div>
        </div>
        
        <div class="contact-detail">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
          </div>
          <div class="contact-text">
            <strong>Email:</strong> {{ t('ehis_email') }}
          </div>
        </div>
        
        <div class="contact-detail">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
          </div>
          <div class="contact-text">
            <strong>Office Hours:</strong> Mon–Fri | 8:30am–5:00pm
          </div>
        </div>
        
   <div class="map-placeholder">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590426!3d-37.81627974202153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0!2sMelbourne!5e0!3m2!1sen!2sau!4v1614134907994!5m2!1sen!2sau"
    width="100%"
    height="100%"
    style="border:0; border-radius: 8px;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>

      </aside>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { translations, lang } from '../i18n.js'

const t = (key) => (translations[lang.value] && translations[lang.value][key]) || translations.en[key] || key

const form = reactive({ 
  name: '', 
  email: '', 
  phone: '', 
  message: '' 
})

const onSubmit = () => { 
  alert(`Thanks ${form.name || 'there'} — we received your message and will reach out shortly.`); 
  form.name = ''; 
  form.email = ''; 
  form.phone = ''; 
  form.message = ''; 
}
</script>

<style scoped>
.contact {
  padding: 80px 0;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 36px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 18px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.contact-form, .contact-info {
  background: #ffffff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form:hover, .contact-info:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.contact-form h3 {
  font-size: 24px;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 12px;
}

.contact-form .lead {
  color: #64748b;
  margin-bottom: 24px;
  line-height: 1.6;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #f8fafc;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  background-color: #ffffff;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #94a3b8;
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px;
  background: linear-gradient(to right, #2563eb, #3b82f6);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(to right, #1d4ed8, #2563eb);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.25);
}
.map-placeholder {
  height: 200px;
  background-color: #e2e8f0;
  border-radius: 8px;
  margin-top: 24px;
  position: relative;
  overflow: hidden;
}

.contact-info h4 {
  font-size: 20px;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e2e8f0;
}

.contact-detail {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #eff6ff;
  border-radius: 50%;
  flex-shrink: 0;
  color: #3b82f6;
}

.contact-text {
  color: #374151;
  line-height: 1.5;
}

.map-placeholder {
  height: 200px;
  background-color: #e2e8f0;
  border-radius: 8px;
  margin-top: 24px;
  position: relative;
  overflow: hidden;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  cursor: pointer;
  transition: all 0.3s ease;
}

.map-overlay:hover {
  background-color: rgba(37, 99, 235, 0.2);
}

.map-overlay p {
  margin-top: 8px;
  font-weight: 500;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .contact-info {
    order: -1;
  }
}

@media (max-width: 640px) {
  .contact {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 28px;
  }
  
  .contact-grid {
    padding: 0 16px;
  }
  
  .contact-form, .contact-info {
    padding: 24px;
  }
  
  .contact-detail {
    flex-direction: column;
    gap: 8px;
  }
  
  .contact-icon {
    align-self: flex-start;
  }
}
</style>